import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { profileController } from './profile.controller'
const router = Router()

router
  .route('/')
  .get(auth(ROLE.ADMIN, ROLE.CUSTOMER), profileController.getProfile)
export const profileRoutes = router
