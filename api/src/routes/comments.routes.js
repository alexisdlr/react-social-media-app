import { Router } from "express"
import { getComments } from "../controllers/comments.controller.js"

const router = Router()

router.get('/', getComments)

export default router