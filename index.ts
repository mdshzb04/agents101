import 'dotenv/config'
import http from 'http'
import { runAgent } from './src/agent'
import { tools } from './src/tools'

const userMessage = process.argv[2]

if (userMessage) {
  await runAgent({ userMessage, tools })
} else {
  console.log('No message provided. Running in server mode.')
}


http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`)

  if (url.pathname === '/run') {
    const prompt = url.searchParams.get('prompt')

    if (!prompt) {
      res.writeHead(400, { 'Content-Type': 'text/plain' })
      res.end('Missing prompt')
      return
    }

    const result = await runAgent({ userMessage: prompt, tools })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
    return
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Agent is running')
}).listen(process.env.PORT || 3000)
