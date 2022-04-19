import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { createResource } from "../../shared/factory/createResource";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import Logger from "../../shared/logger/appLogger";
import { UserModel } from "../entity/models/UserModel";
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
    if (!existUser) {
      throw new ApplicationError(
        "Email already exist",
        "user",
        "createUserController",
        400
      );
    }
    // si el usuario no existe crearlo
    await createResource(UserModel)({
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
  }
};
