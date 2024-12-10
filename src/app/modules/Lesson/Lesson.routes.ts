import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { LessonController } from './Lesson.controller';

const router = express.Router();

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  LessonController.createLesson
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  LessonController.getAllLessons
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  LessonController.getSingleLesson
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  LessonController.updateLesson
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  LessonController.deleteLesson
);

export const LessonRoutes = {
  router,
};
