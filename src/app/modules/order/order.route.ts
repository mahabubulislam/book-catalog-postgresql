import { Router } from 'express'
import { ROLE } from '../../enum/enum'
import auth from '../../middlewares/auth'
import { orderController } from './order.controller'

const router = Router()

router
  .route('/create-order')
  .post(auth(ROLE.CUSTOMER), orderController.createOrder)
router
  .route('/')
  .get(auth(ROLE.ADMIN, ROLE.CUSTOMER), orderController.getAllOrder)
router
  .route('/:orderId')
  .get(auth(ROLE.ADMIN, ROLE.CUSTOMER), orderController.getSingleOrder)

export const orderRoutes = router
