import { config } from "./config";
import mongoose from "mongoose";

const connectDB =async () =>{
    mongoose.connect(config.databaseUrl as string)
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((err) => console.error("DataBase Connection Error", err))
}

export default connectDB;
