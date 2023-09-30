import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import config from '../../config'

const createToken = (payload: JwtPayload): string => {
  const token = jwt.sign(payload, config.jwt.secret as Secret, {
    expiresIn: '1y'
  })
  return token
}

const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.jwt.secret as Secret) as JwtPayload
}
export const jwtHelper = { createToken, verifyToken }
