import express from 'express'
import { aiController } from './controllers/aiController.js'
import cors from 'cors'
import { aiWelcomeMessage } from './controllers/aiWelcomeMessage.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/ai', aiController)
app.get('/welcome', aiWelcomeMessage)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})