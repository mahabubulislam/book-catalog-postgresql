import { Category } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createCategory = async (payload: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data: payload
  })
  return category
}

export const categoryService = { createCategory }
