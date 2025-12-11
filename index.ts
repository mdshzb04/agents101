import 'dotenv/config'
import { runAgent } from './src/agent'
import z from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const messages = await runAgent({
  userMessage,
  tools: [{
    name: 'weather', 
    parameters: z.object({
      location: z.string().describe('The location to get weather for')
    }).describe('get the weather')
  }]
})
