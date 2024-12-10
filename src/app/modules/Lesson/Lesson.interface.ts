import { Model } from "mongoose"

export type ILesson = {
  _id?: string
  name: string
  lessonNumber: number
  vocabularyCount?: number // Count of vocabularies linked to the lesson
}

export type LessonModel = Model<ILesson>
