import express from "express";

import { userPosts } from "../controllers/post-controller.js";

const userPostRouter = express.Router();

userPostRouter.post('/posts', userPosts);

export default userPostRouter;