import { Router } from "express";
import { RegisterUser, LoginUser, LogoutUser, getCurrentUser } from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const userRouter = Router();

userRouter.get("/logout", authMiddleware, LogoutUser);
userRouter.get("/current", authMiddleware, getCurrentUser);

userRouter.post("/register", RegisterUser);
userRouter.post("/login", LoginUser);