import authMiddleware from "../middleware/authMiddleware.js";
import { Router } from "express";
import { addComment } from "../controllers/postController.js";
import { ensureAuthenticated } from "../middleware/ensureAuthentication.js";

const commentRouter = Router();

commentRouter.post("/:postId/comment", authMiddleware, ensureAuthenticated ,addComment);

export { commentRouter };