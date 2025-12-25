import 'dotenv/config'
import { runAgent } from './src/agent'
import { tools } from './src/tools'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

await runAgent({userMessage,tools})




import http from 'http'

http.createServer((_, res) => {
  res.writeHead(200)
  res.end('Agent is running')
}).listen(process.env.PORT || 3000)
