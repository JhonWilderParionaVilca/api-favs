import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findResourcesByField } from "../../shared/factory/findResourcesByField";
import { updateOneResourceByField } from "../../shared/factory/updateOneResourceByField";
import Logger from "../../shared/logger/appLogger";
import { FavModel } from "../entity/models/FavModel";
import { BodyRequesUpdateFavs } from "../types/createFavs";

export const addItemsController = async (
  req: Request<{ id: string }, {}, BodyRequesUpdateFavs>,
  res: Response,
  next: NextFunction
) => {
  const { name, items } = req.body;

  try {
    const existFav = await findResourcesByField(FavModel)({
      _id: req.params.id,
      owner: req.userId,
    });
    if (!existFav || existFav.length < 1) {
      throw new ApplicationError(
        "El usuario no tiene la lista de favorito",
        "Fav",
        "addItemsController-existFav",
        404
      );
    }

    console.log(items);

    const updateCount = await updateOneResourceByField(FavModel)(
      {
        _id: req.params.id,
        owner: req.userId,
      },
      {
        name,
        items: [...existFav[0].items, ...items],
      }
    );
    if (updateCount < 1) {
      throw new ApplicationError(
        "El usuario no tiene la lista de favoritos",
        "Fav",
        "deleteFavController",
        404
      );
    }

    res.status(201).json({
      data: updateCount,
      msg: "updated",
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
