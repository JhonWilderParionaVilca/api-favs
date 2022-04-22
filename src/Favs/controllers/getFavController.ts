import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findResourcesByField } from "../../shared/factory/findResourcesByField";
import Logger from "../../shared/logger/appLogger";
import { FavModel } from "../entity/models/FavModel";

export const getFavController = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const existFav = await findResourcesByField(FavModel)({
      _id: req.params.id,
      owner: req.userId,
    });
    if (!existFav || existFav.length < 1) {
      throw new ApplicationError(
        "El usuario no tiene la lista de favorito",
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
    Logger.error("getFavController", {
      instance: err.fn,
      trace: err.message,
    });
    next(new ApplicationError(err.message, err.type, err.fn, err.statusCode));
  }
};
