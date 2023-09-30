import { User } from '@prisma/client'
import httpStatus from 'http-status'
import prisma from '../../../shared/prisma'
import ApiError from '../../errors/apiError'
import { jwtHelper } from '../../helpers/jwtHelper'

const createUser = async (data: User): Promise<Partial<User>> => {
  const result = await prisma.user.create({ data })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...user } = result
  return user
}

const loginUser = async (payload: Partial<User>): Promise<string> => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
      password: payload.password
    }
  })
  if (!user)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect email or password')
  const token = jwtHelper.createToken({ userId: user?.id, role: user?.role })
  return token
}
export const authService = { createUser, loginUser }
