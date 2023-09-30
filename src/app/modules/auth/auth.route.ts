import { Router } from 'express'
import { authController } from './auth.controller'

const router = Router()

router.route('/signup').post(authController.createUser)
export const authRoutes = router
