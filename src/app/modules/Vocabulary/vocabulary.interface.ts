import { Model } from 'mongoose'

export type IVocabulary = {
  _id?: string
  word: string // Japanese word (e.g., "こんにちは")
  pronunciation: string // Pronunciation (e.g., "Konnichiwa")
  meaning: string // Meaning or usage of the word
  whenToSay: string // Description of when to use the word
  lessonNumber: number // Lesson number to which this vocabulary belongs
  adminEmail: string // Email of the Admin who created the vocabulary
}

export type VocabularyModel = Model<IVocabulary>
