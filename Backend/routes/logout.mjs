import express from 'express'
const router = express.Router()
import handelLogout from '../controllers/logoutController.mjs'

router.get('/',handelLogout)

export default router;