import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import Logger from "../../shared/logger/appLogger";
import { UserModel } from "../entity/models/UserModel";
import { createUserService } from "../services/createUserService";
import { BodyRequestCreateUser } from "../types/CreateUser";

export const createUserController = async (
  req: Request<{}, {}, BodyRequestCreateUser>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    // si el usuario existe error
    const existUser = await findOneResourceByField(UserModel)({
      email,
    });
    if (existUser) {
      throw new ApplicationError(
        "Email already exist",
        "user",
        "existUser",
        400
      );
    }
    // si el usuario no existe crearlo
    await createUserService({
      email,
      password,
    });

    res.status(201).json({
      msg: "user created",
      status: true,
    });
  } catch (err: any) {
    Logger.error("createUserController", {
      instance: err.fn,
      trace: err.message,
    });
    next(new ApplicationError(err.message, err.type, err.fn, err.statusCode));
  }
};
