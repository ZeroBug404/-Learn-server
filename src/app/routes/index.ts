import express from 'express'
import { UserRoutes } from '../modules/User/user.routes'
import { AuthRoutes } from '../modules/Auth/auth.routes'
import { LessonRoutes } from '../modules/Lesson/Lesson.routes'
import { VocabularyRoutes } from '../modules/Vocabulary/vocabulary.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/auth',
    route: AuthRoutes.router,
  },
  {
    path: '/lessons',
    route: LessonRoutes.router,
  },
  {
    path: '/vocabulary',
    route: VocabularyRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
