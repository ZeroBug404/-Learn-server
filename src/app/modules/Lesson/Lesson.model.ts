import { model, Schema } from 'mongoose'
import { ILesson, LessonModel } from './Lesson.interface'

const LessonSchema = new Schema<ILesson>(
  {
    name: {
      type: String,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    vocabularyCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

export const Lesson = model<ILesson, LessonModel>('Lesson', LessonSchema)
