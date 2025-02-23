/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/http-error";


export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
){
  if (!err) {
    next();
    return;
  }
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

