import authMiddleware from "../middleware/authMiddleware.js";
import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthentication.js";
import { addComment } from "../controllers/commentController.js";

const commentRouter = Router();

commentRouter.post(
  "/:postId/comment",
  authMiddleware,
  ensureAuthenticated,
  addComment
);

export { commentRouter };
