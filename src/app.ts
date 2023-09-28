import cors from 'cors'
import express, { Application, urlencoded } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(globalErrorHandler)

export default app
