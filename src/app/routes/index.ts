import express from 'express'
import { UserRoutes } from '../modules/User/user.routes'
import { AuthRoutes } from '../modules/Auth/auth.routes'

const router = express.Router()

const moduleRoutes = [
  { path: '/users', route: UserRoutes.router },
  { path: '/auth', route: AuthRoutes.router },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
