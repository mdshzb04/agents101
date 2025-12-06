import type { AIMessage } from '../types' // Ensure this path is correct
import { openai } from './ai'

export const runLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  temperature = 0.1,
}: {
  messages: AIMessage[]
  temperature?: number
  model?: string
}) => {
  const response = await openai.chat.completions.create({
    model:'gpt-4o-mini',
    messages,
    temperature :2,
  })
  return response.choices[0].message
}