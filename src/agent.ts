import type { AIMessage } from '../types'
import { runLLM } from './llm'
import { z } from 'zod'
import { runTool } from './toolRunners'
import { addMessages, getMessages, saveToolResponse } from './memory'
import { logMessage, showLoader } from './ui'

export const runAgent = async ({
  userMessage,
  tools
}: {
  userMessage: string
  tools: { name: string; parameters: z.AnyZodObject }[]
}) => {
  await addMessages([
    {
      role: 'user',
      content: userMessage,
    },
  ])

  const loader = showLoader('🤔 Thinking...')

  while (true) {
    const history = await getMessages()

    const response = await runLLM({
      messages: history,
      tools,
    })

    await addMessages([response])
    logMessage(response)

  
    if (!response.tool_calls || response.tool_calls.length === 0) {
      break
    }

   
    for (const toolCall of response.tool_calls) {
      loader.update(`executing: ${toolCall.function.name}`)

      const toolResponse = await runTool(toolCall, userMessage)

      await saveToolResponse(toolCall.id, toolResponse)

      loader.update(`executed: ${toolCall.function.name}`)
    }
  }

  loader.stop()
  return getMessages()
}
