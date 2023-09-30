import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { categoryController } from './category.controller'

const router = Router()

router
  .route('/create-category')
  .post(auth(ROLE.ADMIN), categoryController.createCategory)
router.route('/').get(categoryController.getAllCategory)
router.route('/:id').get(categoryController.getSingleCategory)
export const categoryRoutes = router
