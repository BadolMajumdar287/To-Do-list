import express from "express";
import { config } from "dotenv";

import { DatabaseConfig } from "./config/mongoose.config.js";

config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
DatabaseConfig()







app.listen(PORT,() => {
    
    console.log(`SERVER IS RUN PORT ${PORT}`);

});