import 'dotenv/config'
import { runAgent } from './src/agent'
import { tools } from './src/tools'
import http from 'http'

const userMessage = process.argv[2]

if (userMessage) {
  await runAgent({ userMessage, tools })
} else {
  console.log('No message provided. Running in server mode.')
}

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Agent is running')
}).listen(process.env.PORT || 3000)
