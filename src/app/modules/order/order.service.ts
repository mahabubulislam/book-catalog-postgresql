import { Order, Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createOrder = async (
  payload: Prisma.OrderCreateInput
): Promise<Order> => {
  const result = await prisma.order.create({
    data: payload
  })
  return result
}

export const orderService = { createOrder }
