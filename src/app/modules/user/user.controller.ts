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
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await userService.getSingleUser(id)
  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieved successfully',
    data: result
  })
})
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const payload = req.body
  const result = await userService.updateUser(id, payload)
  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users updated successfully',
    data: result
  })
})
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await userService.deleteUser(id)
  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users deleted successfully',
    data: result
  })
})
export const userController = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
}
