import 'dotenv/config'
import { runLLM } from './src/llm'
import { addMessages, getMessages } from './src/memory'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

// save user message
await addMessages([{ role: 'user', content: userMessage }])

// load history
const messages = await getMessages()

// call model
const response = await runLLM({ messages })

// get text only
const reply = response.content

// save assistant reply as plain string
await addMessages([{ role: 'assistant', content: reply }])

// print clean output
console.log(reply)
