import { Router } from "express";
import {
  createPost,
  getPosts,
  editPost,
  deletePost,
} from "../controllers/postController.js";
import {
  createPostValidations,
  listPostValidations,
  getPostValidations,
  updatePostValidations,
  deletePostValidations,
} from "../validations/postValidation.js"
import authMiddleware from "../middleware/authMiddleware.js";

const postRouter = Router();

postRouter.post("/create", authMiddleware, createPostValidations , createPost);
postRouter.get("/all", listPostValidations ,getPosts);
postRouter.patch("/:postId", authMiddleware, updatePostValidations , editPost);
postRouter.delete("/:postId", authMiddleware, deletePostValidations , deletePost);
// postRouter.get("/prueba", (req, res) => {
//  res.send("Probando si funciona el router");
// });

export { postRouter };