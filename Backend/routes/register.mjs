import express from 'express'
const router = express.Router()
import getRegisterRoute from '../controllers/register-controller.mjs'

router.post('/',getRegisterRoute)

export default router;