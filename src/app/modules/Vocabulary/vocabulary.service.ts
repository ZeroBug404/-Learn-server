import { IVocabulary } from './vocabulary.interface';
import { Vocabulary } from './vocabulary.model';
import { ApiError } from '../../../errors/ApiErrors';
import httpStatus from 'http-status';

const createVocabulary = async (payload: IVocabulary) => {
  const result = await Vocabulary.create(payload);
  return result;
};

const getAllVocabularies = async () => {
  const result = await Vocabulary.find({});
  return result;
};

const getSingleVocabulary = async (id: string) => {
  const result = await Vocabulary.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vocabulary not found');
  }
  return result;
};

const updateVocabulary = async (id: string, payload: Partial<IVocabulary>) => {
  const result = await Vocabulary.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vocabulary not found');
  }
  return result;
};

const deleteVocabulary = async (id: string) => {
  const result = await Vocabulary.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vocabulary not found');
  }
  return result;
};

export const VocabularyService = {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
};
