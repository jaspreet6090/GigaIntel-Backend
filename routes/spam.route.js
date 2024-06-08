import express from "express"
import {markSpam, searchContact} from "../controllers/spam.controller.js"
import {protect} from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/mark-spam", protect, markSpam);
router.get("/search", protect, searchContact);

export default router;