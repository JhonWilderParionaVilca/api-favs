import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import Logger from "../../shared/logger/appLogger";
import { FavModel } from "../entity/models/FavModel";
import { createFavsService } from "../services/createFavService";
import { BodyRequestCreateFavs } from "../types/createFavs";

export const createFavsController = async (
  req: Request<{}, {}, BodyRequestCreateFavs>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  try {
    // si el fav existe error
    const existFav = await findOneResourceByField(FavModel)({
      name,
    });
    if (existFav) {
      throw new ApplicationError(
        "Fav already exist",
        "Fav",
        "exist list fav",
        400
      );
    }
    // si el Fav no existe crearlo
    await createFavsService({
      name,
      owner: req.userId,
    });

    res.status(201).json({
      msg: "fav created",
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
