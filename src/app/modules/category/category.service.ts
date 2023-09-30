import { Category } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createCategory = async (payload: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data: payload
  })
  return category
}
const getAllCategory = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany()
  return categories
}
export const categoryService = { createCategory, getAllCategory }
