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
      location: z.string().describe('use This to get weather.does not need a city or location')
    }).describe('get the weather')
  }]
})
