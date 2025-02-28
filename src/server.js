import express from 'express'
import { aiController } from './controllers/aiController.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/ai', aiController)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})