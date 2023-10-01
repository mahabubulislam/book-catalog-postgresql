import { Order } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
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

const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload
  const result = await orderService.getAllOrder(user)
  sendResponse<Order[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order retrieved successfully',
    data: result
  })
})
export const orderController = { createOrder, getAllOrder }
