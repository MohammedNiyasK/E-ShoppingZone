import express from 'express'
const router = express.Router()
import getAuthRouter from '../controllers/auth-controller.mjs';

router.post('/',getAuthRouter)

export default router;