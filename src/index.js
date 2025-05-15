import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

import { DatabaseConfig } from "./config/mongoose.config.js";
import { userRouter } from "./router/user.router.js";
import { todoRouter } from "./router/todo.router.js";
import cookieParser from "cookie-parser";




config();
const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cookieParser());


app.use("/user",userRouter);
app.use("/todo",todoRouter);

DatabaseConfig();







app.listen(PORT,() => {
console.log(`SERVER IS RUN PORT ${PORT}`);
});