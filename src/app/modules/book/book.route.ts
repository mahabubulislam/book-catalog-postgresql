import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { bookController } from './book.controller'

const router = Router()

router.route('/create-book').post(auth(ROLE.ADMIN), bookController.createBook)
router.route('/').get(bookController.getAllBook)
router.route('/:categoryId/category').get(bookController.getBookByCategory)
router.route('/:id').get(bookController.getSingleBook)
router.route('/:id').patch(auth(ROLE.ADMIN), bookController.updateBook)
router.route('/:id').delete(auth(ROLE.ADMIN), bookController.deleteBook)
export const bookRoutes = router
