import { z } from 'zod'
import type { ToolFn } from '../../types'
import fetch from 'node-fetch'

export const dadJokeToolDefinition = {
  name: 'dad_joke',
  parameters: z.object({}),
}

type Args = z.infer<typeof dadJokeToolDefinition.parameters>

type DadJokeResponse = {
  joke: string
}

export const dadJoke: ToolFn<Args, string> = async ({ toolArgs}) => {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
  
  const data = (await res.json()) as DadJokeResponse
  return data.joke
}
