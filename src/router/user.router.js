import { Router } from "express";
import { RegisterUser,LoginUser,LogoutUser,getCurrentUser } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.get("/logout",LogoutUser);
userRouter.get("/current",getCurrentUser);
userRouter.post("/register",RegisterUser);
userRouter.post("/login",LoginUser);