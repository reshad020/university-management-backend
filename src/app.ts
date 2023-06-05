import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const hello = 'hello'
app.use(cors())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Working fine')
})

export default app
