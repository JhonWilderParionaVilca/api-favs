import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { deleteOneResourceByField } from "../../shared/factory/deleteOneResourceByField";
import Logger from "../../shared/logger/appLogger";
import { FavModel } from "../entity/models/FavModel";

export const deleteFavController = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedCount = await deleteOneResourceByField(FavModel)({
      _id: req.params.id,
      owner: req.userId,
    });
    if (deletedCount < 1) {
      throw new ApplicationError(
        "El usuario no tiene la lista de favoritos",
        "Fav",
        "deleteFavController",
        404
      );
    }

    res.status(201).json({
      data: deletedCount,
      msg: "deleted",
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
