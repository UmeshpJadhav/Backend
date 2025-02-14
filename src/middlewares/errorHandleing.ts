import { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from  "../config/config";

  
  // **Global Error Handler**
    const globalErrorHandler =(
        err: HttpError, 
        req: Request, 
        res: Response, 
        next: NextFunction
    ) => {
    const statusCode: number = err.status || 500;
    next(createHttpError(404, "Route not found"));
    
    res.status(statusCode).json({
      success: false,
      message: err.message,
      errorStack: config.env === "development" ? err.stack : undefined, // **Security Improvement**
    });
  };
  

export default globalErrorHandler;