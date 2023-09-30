import { Router } from 'express'
import { authRoutes } from '../modules/auth/auth.route'
import { categoryRoutes } from '../modules/category/category.route'
import { userRoutes } from '../modules/user/user.route'

const router = Router()

const moduleRoutes = [
  { path: '/auth', route: authRoutes },
  { path: '/users', route: userRoutes },
  { path: '/categories', route: categoryRoutes }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
