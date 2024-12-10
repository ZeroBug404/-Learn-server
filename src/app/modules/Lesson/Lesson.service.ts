import httpStatus from 'http-status'
import { ApiError } from '../../../errors/ApiErrors'
import { ILesson } from './Lesson.interface'
import { Lesson } from './Lesson.model'

const createLesson = async (payload: ILesson) => {
  const existingLesson = await Lesson.findOne({
    lessonNumber: payload.lessonNumber,
  })
  if (existingLesson) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Lesson with this number already exists'
    )
  }
  const result = await Lesson.create(payload)
  return result
}

const getAllLessons = async () => {
  const result = await Lesson.find({})
  return result
}

const getSingleLesson = async (id: string) => {
  const result = await Lesson.findById(id)
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lesson not found')
  }
  return result
}

const updateLesson = async (id: string, payload: ILesson) => {
  const result = await Lesson.findByIdAndUpdate(id, payload, { new: true })
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lesson not found')
  }
  return result
}

const deleteLesson = async (id: string) => {
  const result = await Lesson.findByIdAndDelete(id)
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lesson not found')
  }
  return result
}

export const LessonService = {
  createLesson,
  getAllLessons,
  getSingleLesson,
  updateLesson,
  deleteLesson,
}
