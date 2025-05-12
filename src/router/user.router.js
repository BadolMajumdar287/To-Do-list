import { Router } from "express";
import { userCreate,userLogin,userLogout,getCurrentUser } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.get("/logout",userLogout);
userRouter.get("/current",getCurrentUser);
userRouter.post("/register",userCreate);
userRouter.post("/login",userLogin);