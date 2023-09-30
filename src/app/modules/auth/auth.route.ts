import { Router } from 'express'
import { authController } from './auth.controller'

const router = Router()

router.route('/signup').post(authController.createUser)
router.route('/signin').post(authController.loginUser)
export const authRoutes = router
