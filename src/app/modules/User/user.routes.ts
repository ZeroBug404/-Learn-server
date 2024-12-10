import express from 'express'
import auth from '../../middlewares/auth'

import { ENUM_USER_ROLE } from '../../../enums/user'
import { UserController } from './user.controller'

const router = express.Router()

router.get(
  '/my-profile',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserController.userProfile
)
router.patch(
  '/update-my-profile',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserController.updateUserProfile
)

router.post('/signup', UserController.createUser)

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers)

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser)

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),

  UserController.updateSingleUser
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteSingleUser
)

export const UserRoutes = {
  router,
}
