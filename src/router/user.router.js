import { Router } from "express";
import { RegisterUser,userLogin,userLogout,getCurrentUser } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.get("/logout",userLogout);
userRouter.get("/current",getCurrentUser);
userRouter.post("/register",RegisterUser);
userRouter.post("/login",userLogin);