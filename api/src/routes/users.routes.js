import { Router } from "express"
import { getUser } from "../controllers/users.controller.js"

const router = Router()

router.get('/find/:userId', getUser)

export default router