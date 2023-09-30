import { Book } from '@prisma/client'
import prisma from '../../../shared/prisma'

const createBook = async (payload: Book): Promise<Book> => {
  const Book = await prisma.book.create({
    data: payload,
    include: {
      category: true
    }
  })
  return Book
}

export const bookService = { createBook }
