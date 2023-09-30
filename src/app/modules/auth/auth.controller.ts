import { User } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { authService } from './auth.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const data = await authService.createUser(payload)

  sendResponse<User>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User created successfully',
    data: data
  })
})

export const authController = { createUser }
