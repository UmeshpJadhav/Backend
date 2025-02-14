import  express  from "express";
import connectDB from "./config/db";
const app = express();
connectDB();
import userRouter from "./user/userRouter";


app.use("/api/users", userRouter);


export default app;