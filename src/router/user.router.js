import { Router } from "express";
import { userCreate,userLogin } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.post("/register",userCreate);
userRouter.post("/login",userLogin);