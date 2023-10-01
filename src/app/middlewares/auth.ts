import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import ApiError from '../errors/apiError'
import { jwtHelper } from '../helpers/jwtHelper'

const auth =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization
      if (!token) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
      const verifiedUser = jwtHelper.verifyToken(token)
      req.user = verifiedUser
      if (!roles.includes(verifiedUser.role))
        throw new ApiError(
          httpStatus.FORBIDDEN,
          'Access Denied, Request Forbidden'
        )

      next()
    } catch (error) {
      next(error)
    }
  }
export default auth
