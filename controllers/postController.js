import { PostModel } from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.userId;

    const newPost = new PostModel({ title, content, author: userId });
    await newPost.save();

    res.status(201).json({ message: "Post creado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al crear el post" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("author", "username");
    res.json(posts);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error en el servidor al obtener los posts" });
  }
};

export const editPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.postId;
    const userId = req.user.userId;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    if (post.author.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "No tienes autorizacion para editar este post" });
    }

    post.title = title;
    post.content = content;
    await post.save();

    res.json({ message: "Post editado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al editar el post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.userId;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    if (post.author.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "No tienes autorizacion para borrar este post" });
    }

    await post.remove();
    res.json({ message: "Post borrado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al borrar el post" });
  }
};

