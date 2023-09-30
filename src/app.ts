import cors from 'cors'
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  urlencoded
} from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes/routes'

const app: Application = express()
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.get('/', async (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({ success: true, message: 'Server running' })
})
app.use('/api/v1', routes)
app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found'
      }
    ]
  })
  next()
})

export default app
