import { Response } from 'express'

type IApiResponse<T> = {
  success: boolean
  statusCode: number
  message: string
  data?: T | null
  meta?: {
    limit: number
    total: number
    page: number
  }
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    data: data?.data,
    message: data.message,
    meta: data?.meta
  }

  res.status(data.statusCode).json(responseData)
}

export default sendResponse
