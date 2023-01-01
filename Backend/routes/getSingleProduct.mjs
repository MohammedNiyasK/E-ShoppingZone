import express from 'express'
const router = express.Router()
import { getSingleProduct } from '../controllers/product-controller.mjs';

router.get('/api/products/getFeaturedProducts/:id',getSingleProduct)

export default router;