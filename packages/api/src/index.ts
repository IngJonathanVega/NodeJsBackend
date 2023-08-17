import express, { json } from 'express'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

const PORT = 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
