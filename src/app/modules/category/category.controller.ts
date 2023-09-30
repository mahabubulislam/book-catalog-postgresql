import { Category } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { categoryService } from './category.service'

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body
  const result = await categoryService.createCategory(payload)
  sendResponse<Category>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Category created successfully',
    data: result
  })
})
const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await categoryService.getAllCategory()
  sendResponse<Category[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categories retrieved successfully',
    data: result
  })
})

export const categoryController = {
  createCategory,
  getAllCategory
}
