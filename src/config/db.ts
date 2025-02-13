import { config } from "./config";
import mongoose from "mongoose";

const connectDB =async () =>{
    try{
        
        mongoose.connection.on ("connected", () =>{
            console.log("DataBase Connected Successfully");
        });

        mongoose.connection.on ("error", (err) =>{
               console.error("DataBase Connection Error", err)
        });
        
        
        await mongoose.connect(config.databaseUrl as string);
        
  
    }
    catch(err){
          console.error("Failed To Connect DataBase", err);
          process.exit(1);
    }
}

export default connectDB;
