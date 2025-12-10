import type { AIMessage } from '../types'
import { runLLM } from './llm'
import { addMessages, getMessages } from './memory'
import { showLoader } from './ui'

export const runAgent = async ({
  userMessage,
}: {
  userMessage: string
}) => {
  
  await addMessages([
    {
      role: 'user',
      content: userMessage,
    },
  ])

  const loader = showLoader('Thinking...')
  const history: AIMessage[] = await getMessages()

  const response = await runLLM({
    messages: history,
    tools: [],
  })


  const assistantMessage: AIMessage = {
    role: 'assistant',
    content: response.content,
  }
  await addMessages([assistantMessage])
  loader.stop()
  return getMessages()
}
