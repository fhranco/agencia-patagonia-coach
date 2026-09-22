import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev middleware for /api serverless endpoints
const apiDevServerPlugin = () => ({
  name: 'api-dev-server',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const url = req.url?.split('?')[0]
      if (url === '/api/chat' || url === '/api/leads' || url === '/api/diagnostic') {
        // Polyfill status and json helpers
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
          return res
        }

        // Read body for POST/PUT
        if (req.method === 'POST' || req.method === 'PUT') {
          let bodyData = ''
          req.on('data', chunk => {
            bodyData += chunk
          })
          req.on('end', async () => {
            try {
              req.body = bodyData ? JSON.parse(bodyData) : {}
            } catch {
              req.body = {}
            }

            try {
              if (url === '/api/chat') {
                const { default: handler } = await import('./api/chat.js')
                await handler(req, res)
              } else if (url === '/api/leads') {
                const { default: handler } = await import('./api/leads.js')
                await handler(req, res)
              } else if (url === '/api/diagnostic') {
                const { default: handler } = await import('./api/diagnostic.js')
                await handler(req, res)
              }
            } catch (err) {
              console.error('[API Dev Server Error]', err)
              if (!res.writableEnded) {
                res.status(500).json({ error: 'Internal Server Error', details: err.message })
              }
            }
          })
          return
        }

        // Handle GET / OPTIONS
        try {
          if (url === '/api/chat') {
            const { default: handler } = await import('./api/chat.js')
            await handler(req, res)
          } else if (url === '/api/leads') {
            const { default: handler } = await import('./api/leads.js')
            await handler(req, res)
          } else if (url === '/api/diagnostic') {
            const { default: handler } = await import('./api/diagnostic.js')
            await handler(req, res)
          }
        } catch (err) {
          console.error('[API Dev Server Error]', err)
          if (!res.writableEnded) {
            res.status(500).json({ error: 'Internal Server Error', details: err.message })
          }
        }
        return
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiDevServerPlugin()],
  server: {
    allowedHosts: true,
  },
})
