import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});

export const PostModel = model("Post", postSchema);
