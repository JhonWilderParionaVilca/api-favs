import { NextFunction, Request, Response } from "express";

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    msg: "login user",
  });
};
