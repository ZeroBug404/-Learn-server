import { model, Schema } from 'mongoose'
import { IVocabulary, VocabularyModel } from './vocabulary.interface'

const VocabularySchema = new Schema<IVocabulary>(
  {
    word: {
      type: String,
      required: true,
      trim: true,
    },
    pronunciation: {
      type: String,
      required: true,
      trim: true,
    },
    meaning: {
      type: String,
      required: true,
      trim: true,
    },
    whenToSay: {
      type: String,
      required: true,
      trim: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
      ref: 'Lesson', // References the Lesson model
    },
    adminEmail: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
)

export const Vocabulary = model<IVocabulary, VocabularyModel>(
  'Vocabulary',
  VocabularySchema
)
