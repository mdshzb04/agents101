import type { AIMessage } from '../types' 
import { openai } from './ai'

// Define an async function runLLM that sends messages to the LLM and return assistant Reply
export const runLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  temperature = 0.1,
}: {
  messages: AIMessage[]
  temperature?: number
  model?: string
}) => {
  // request
  const response = await openai.chat.completions.create({
    model:'gpt-4o-mini',
    messages,
    temperature :2,
  })
  // assistant message 
  return response.choices[0].message
}
