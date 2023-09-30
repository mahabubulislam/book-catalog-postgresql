import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { userRoutes } from '../modules/user/user.router'

const router = Router()

const moduleRoutes = [
  { path: '/auth', route: authRoutes },
  { path: '/users', route: userRoutes }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
