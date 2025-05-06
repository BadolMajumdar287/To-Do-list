import { Router } from "express";
import { userCreate } from "../controller/user.controller.js";

export const userRouter = Router();


userRouter.post("/register",userCreate);