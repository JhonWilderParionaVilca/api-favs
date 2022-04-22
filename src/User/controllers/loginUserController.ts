import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import Logger from "../../shared/logger/appLogger";
import { loginUserService } from "../services/loginUserService";
import { User } from "../types/User";

export const loginUserController = async (
  req: Request<{}, {}, User>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const token = await loginUserService({ email, password });

    res.status(201).json({
      token,
    });
  } catch (err: any) {
    Logger.error("loginUserController", {
      instance: err.fn,
      trace: err.message,
    });
    next(new ApplicationError(err.message, err.type, err.fn, err.statusCode));
  }
};
