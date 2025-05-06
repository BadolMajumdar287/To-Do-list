import { connect } from "mongoose";
import { config } from "dotenv";

config();
const MONGODB_URL =  process.env.MONGODB_URL;

export const DatabaseConfig = async () => {

   try {
 
    const connection = await connect(MONGODB_URL);

    const db = connection.connection;

    const {name,host,port} = db;

    console.log(`Dadabase connected \nDatabase name: ${name} \nDatabase host: ${host} \nDatabase port ${port}`);

    
   } catch (error) {

    console.error(error);
    process.exit(1);
    
   }



}