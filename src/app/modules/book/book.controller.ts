import { Book } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { bookService } from './book.service'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await bookService.createBook(payload)
  sendResponse<Book>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    data: result
  })
})

export const bookController = { createBook }
