import express from "express";
const router = express.Router();
import { find, index, post, show } from "../controllers/blog_controller"

router.get("/", index);
router.get("/userId", show)
router.get("/:blogId", find);
router.post("/", post)
export default router;
