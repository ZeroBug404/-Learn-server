import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { VocabularyController } from './vocabulary.controller';

const router = express.Router();

// Routes for vocabulary management
router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  VocabularyController.createVocabulary
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  VocabularyController.getAllVocabularies
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  VocabularyController.getSingleVocabulary
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  VocabularyController.updateVocabulary
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  VocabularyController.deleteVocabulary
);

export const VocabularyRoutes = {
  router,
};
