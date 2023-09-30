import { User } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { userService } from './user.service'

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.getAllUser()
  sendResponse<User[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieved successfully',
    data: result
  })
})
export const userController = { getAllUser }
