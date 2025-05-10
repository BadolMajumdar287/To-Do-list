import { Router } from "express";
import { RegisterUser, LoginUser, GetCurrentUser, LogoutUser } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.get("/logout", LogoutUser);
userRouter.get("/current", GetCurrentUser);
userRouter.post("/register", RegisterUser);
userRouter.post("/login", LoginUser);