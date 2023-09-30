import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { userController } from './user.controller'

const router = Router()

router.route('/').get(auth(ROLE.ADMIN), userController.getAllUser)
router.route('/:id').get(auth(ROLE.ADMIN), userController.getSingleUser)
router.route('/:id').patch(auth(ROLE.ADMIN), userController.updateUser)
router.route('/:id').delete(auth(ROLE.ADMIN), userController.deleteUser)

export const userRoutes = router
