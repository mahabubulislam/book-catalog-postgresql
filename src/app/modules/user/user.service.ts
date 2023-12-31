import { User } from '@prisma/client'
import prisma from '../../../shared/prisma'

const getAllUser = async (): Promise<User[]> => {
  const users = await prisma.user.findMany()
  return users
}
const getSingleUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  return user
}
const updateUser = async (
  id: string,
  payload: Partial<User>
): Promise<User | null> => {
  const user = await prisma.user.update({
    where: {
      id: id
    },
    data: payload
  })
  return user
}
const deleteUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.delete({
    where: {
      id: id
    }
  })

  return user
}
export const userService = { getAllUser, getSingleUser, updateUser, deleteUser }
