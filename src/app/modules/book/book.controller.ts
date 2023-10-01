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
    message: 'Books retrieved successfully',
    data: result.data,
    meta: result.meta
  })
})
const getBookByCategory = catchAsync(async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId
  const options = pick(req.query, paginationFields)
  const result = await bookService.getBookByCategory(categoryId, options)
  sendResponse<Book[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    data: result.data,
    meta: result.meta
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await bookService.getSingleBook(id)
  sendResponse<Book>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully',
    data: result
  })
})
export const bookController = {
  createBook,
  getAllBook,
  getBookByCategory,
  getSingleBook
}
