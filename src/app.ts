import cors from 'cors'
import express, { Application, urlencoded } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes/routes'

const app: Application = express()
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use('/api/v1', routes)
app.use(globalErrorHandler)

export default app
