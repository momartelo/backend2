import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";

export const addComment = async (req, res) => {
  try {
    //   const { comment } = req.body;
    //   const postId = req.params.postId;

    //   const post = await PostModel.findById(postId);
    //   if (!post) {
    //     return res.status(404).json({ error: "Post no encontrado" });
    //   }

    //   post.comments.push(comment);
    //   await post.save();

    post.comments.push({ body: req.body.comment, user: req.user._id });
    await post.save();

    res.status(201).send("Comentario agregado con exito");
  } catch (error) {
    res.status(500).send(" Error al agregar el comentario");
  }
};
