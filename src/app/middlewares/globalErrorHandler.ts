/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express'
import config from '../../config'
import ApiError from '../errors/apiError'

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  let statusCode = 500
  let message = 'Internal Server Error'

  if (error instanceof ApiError) {
    statusCode = error.statusCode
    message = error.message
  }

  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
    stack: config.env !== 'production' ? error?.stack : ''
  })
}

export default globalErrorHandler
