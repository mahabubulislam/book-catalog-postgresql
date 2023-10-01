import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { bookController } from './book.controller'

const router = Router()

router.route('/create-book').post(auth(ROLE.ADMIN), bookController.createBook)
router.route('/').get(bookController.getAllBook)
router.route('/:categoryId/category').get(bookController.getBookByCategory)
export const bookRoutes = router