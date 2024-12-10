import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../utils/responseHandler';
import { catchAsync } from '../../../utils/catchAsync';
import { VocabularyService } from './vocabulary.service';

const createVocabulary = catchAsync(async (req: Request, res: Response) => {
  const result = await VocabularyService.createVocabulary(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Vocabulary created successfully',
    data: result,
  });
});

const getAllVocabularies = catchAsync(async (req: Request, res: Response) => {
  const result = await VocabularyService.getAllVocabularies();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabularies retrieved successfully',
    data: result,
  });
});

const getSingleVocabulary = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await VocabularyService.getSingleVocabulary(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary retrieved successfully',
    data: result,
  });
});

const updateVocabulary = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await VocabularyService.updateVocabulary(id, updatedData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary updated successfully',
    data: result,
  });
});

const deleteVocabulary = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await VocabularyService.deleteVocabulary(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Vocabulary deleted successfully',
    data: result,
  });
});

export const VocabularyController = {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
};
