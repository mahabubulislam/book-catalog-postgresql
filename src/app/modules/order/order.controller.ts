import { Order } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { orderService } from './order.service'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user
  const payload = req.body
  const result = await orderService.createOrder({
    ...payload,
    userId: user?.userId
  })
  sendResponse<Order>(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order created successfully',
    data: result
  })
})

export const orderController = { createOrder }
