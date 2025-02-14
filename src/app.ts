import  express  from "express";
import connectDB from "./config/db";
const app = express();
connectDB();


app.get("/", (req, res, next ) => {
  
  res.json({ message: "Hello World" })
  next();

});



export default app;