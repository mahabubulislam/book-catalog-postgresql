import { Book } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { paginationFields } from '../../constant/constant'
import { bookFilterableFields } from './book.constant'
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
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, bookFilterableFields)
  const options = pick(req.query, paginationFields)
  const result = await bookService.getAllBook(options, filter)
  sendResponse<Book[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories retrieved successfully',
    data: result.data,
    meta: result.meta
  })
})
export const bookController = { createBook, getAllBook }
