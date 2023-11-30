import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
