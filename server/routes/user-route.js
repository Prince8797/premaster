import express from "express";
import { isAuth } from '../utils.js';

import { userLogin, userSignup, updateAccount } from "../controllers/user-controller.js";

const userRouter = express.Router();


userRouter.post('/login', userLogin);
userRouter.post('/signup', userSignup);
userRouter.put('/account', isAuth, updateAccount);
// userRouter.post('/userDetails', getUserDetails);

export default userRouter;