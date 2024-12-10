import { Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../../utils/responseHandler'
import { catchAsync } from '../../../utils/catchAsync'
import { LessonService } from './Lesson.service'

const createLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await LessonService.createLesson(req.body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Lesson created successfully',
    data: result,
  })
})

const getAllLessons = catchAsync(async (req: Request, res: Response) => {
  const result = await LessonService.getAllLessons()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lessons retrieved successfully',
    data: result,
  })
})

const getSingleLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await LessonService.getSingleLesson(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lesson retrieved successfully',
    data: result,
  })
})

const updateLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await LessonService.updateLesson(req.params.id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lesson updated successfully',
    data: result,
  })
})

const deleteLesson = catchAsync(async (req: Request, res: Response) => {
  const result = await LessonService.deleteLesson(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Lesson deleted successfully',
    data: result,
  })
})

export const LessonController = {
  createLesson,
  getAllLessons,
  getSingleLesson,
  updateLesson,
  deleteLesson,
}
