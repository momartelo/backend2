import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  comments: [{ type: String }],
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  
});

export const CommentModel = model("Comment", commentSchema);
