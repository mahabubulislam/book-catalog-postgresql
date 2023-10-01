import { User } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { profileService } from './profile.service'

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload
  const result = await profileService.getProfile(user)
  sendResponse<User>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieved successfully',
    data: result
  })
})
export const profileController = { getProfile }
