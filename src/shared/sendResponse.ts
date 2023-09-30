import { Response } from 'express'

type IApiResponse<T> = {
  success: boolean
  statusCode: number
  message: string
  data?: T | null
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    data: data.data,
    message: data.message
  }

  res.status(data.statusCode).json(responseData)
}

export default sendResponse
