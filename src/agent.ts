import type { AIMessage } from '../types'
import { runLLM } from './llm'
import { addMessages, getMessages } from './memory'
import { logMessage, showLoader } from './ui'

export const runAgent = async ({
  userMessage,
  tools = [],          // ✅ accept tools
}: {
  userMessage: string
  tools?: any[]        // ✅ define tools type
}) => {
  
  await addMessages([
    {
      role: 'user',
      content: userMessage,
    },
  ])

  const loader = showLoader('🤔Thinking...')
  const history: AIMessage[] = await getMessages()

  const response = await runLLM({
    messages: history,
    tools,            
  })

  if (response.tool_calls) {
    console.log(response.tool_calls)
  }

  await addMessages([response])

  loader.stop()
  return getMessages()
}
