import express from "express";
import {
  createPost,
  getPosts,
  addComment,
} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

export const postRouter = express.Router();

postRouter.post("/create", authMiddleware, createPost);
postRouter.get("/all", getPosts);
postRouter.post("/:postId/comment", authMiddleware, addComment);
postRouter.get("/prueba", (req, res) => {
  res.send("Hello World");
});
