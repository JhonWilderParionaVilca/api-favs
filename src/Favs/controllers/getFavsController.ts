import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findResourcesByField } from "../../shared/factory/findResourcesByField";
import Logger from "../../shared/logger/appLogger";
import { FavModel } from "../entity/models/FavModel";

export const getFavsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existFav = await findResourcesByField(FavModel)({
      owner: req.userId,
    });
    if (!existFav) {
      throw new ApplicationError(
        "El usuario no tiene ninguna lista de favoritos",
        "Fav",
        "exist list fav",
        404
      );
    }

    res.status(201).json({
      data: existFav,
      msg: "list of favs",
      status: true,
    });
  } catch (err: any) {
    Logger.error("createFavsController", {
      instance: err.fn,
      trace: err.message,
    });
    next(new ApplicationError(err.message, err.type, err.fn, err.statusCode));
  }
};
