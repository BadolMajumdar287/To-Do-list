import express from "express";
import { config } from "dotenv";

import { DatabaseConfig } from "./config/mongoose.config.js";
import { userRouter } from "./router/user.router.js";

config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/user",userRouter);
DatabaseConfig();







app.listen(PORT,() => {
console.log(`SERVER IS RUN PORT ${PORT}`);
});