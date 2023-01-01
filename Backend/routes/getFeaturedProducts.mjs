import express from 'express'
const router = express.Router()
import { getFeaturedProducts } from '../controllers/product-controller.mjs';

router.get('/',getFeaturedProducts)

export default router;