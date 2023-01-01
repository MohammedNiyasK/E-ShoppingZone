import express from 'express'
const router = express.Router()
import handleRefreshToken from '../controllers/refreshToken-controller.mjs'

router.get('/',handleRefreshToken)
export default router;