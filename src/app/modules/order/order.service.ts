import { Order, Prisma } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'
import prisma from '../../../shared/prisma'

const createOrder = async (
  payload: Prisma.OrderCreateInput
): Promise<Order> => {
  const result = await prisma.order.create({
    data: payload
  })
  return result
}
const getAllOrder = async (user: JwtPayload): Promise<Order[]> => {
  const whereConditions = user.role === 'admin' ? {} : { userId: user?.userId }
  const result = await prisma.order.findMany({ where: whereConditions })
  return result
}
export const orderService = { createOrder, getAllOrder }
