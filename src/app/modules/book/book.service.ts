import { Book, Prisma } from '@prisma/client'
import prisma from '../../../shared/prisma'
import { paginationHelper } from '../../helpers/paginationHelper'
import { IGenericResponse } from '../../interface/common'
import { IPaginationOptions } from '../../interface/pagination'
import { bookSearchableFields } from './book.constant'
import { IBookFilters } from './book.interface'

const createBook = async (payload: Book): Promise<Book> => {
  const Book = await prisma.book.create({
    data: payload,
    include: {
      category: true
    }
  })
  return Book
}
const getAllBook = async (
  options: IPaginationOptions,
  filter: IBookFilters
): Promise<IGenericResponse<Book[]>> => {
  const { search, ...filterableFields } = filter
  const { page, limit, skip } = paginationHelper.calculatePagination(options)
  const andConditions = []
  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map((field) => ({
        [field]: {
          contains: search,
          mode: 'insensitive'
        }
      }))
    })
  }

  if (Object.keys(filterableFields).length) {
    andConditions.push({
      AND: Object.entries(filterableFields).map(([key, value]) => {
        const fieldMapping: Record<string, unknown> = {}
        if (key === 'category') {
          fieldMapping.categoryId = { contains: value }
        } else if (key === 'minPrice' || key === 'maxPrice') {
          fieldMapping.price =
            key === 'minPrice'
              ? { gte: parseFloat(value as string) }
              : { lte: parseFloat(value as string) }
        }
        return fieldMapping
      })
    })
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}
  const books = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit
  })

  const total = await prisma.book.count()

  return {
    meta: {
      limit,
      page,
      total
    },
    data: books
  }
}
export const bookService = { createBook, getAllBook }
