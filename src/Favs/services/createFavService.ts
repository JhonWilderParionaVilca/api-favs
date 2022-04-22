import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { createResource } from "../../shared/factory/createResource";
import { FavModel } from "../entity/models/FavModel";
import { FavList } from "../types/Fav";

export const createFavsService = async ({ name, owner }: FavList) => {
  try {
    await createResource(FavModel)({
      name,
      owner,
    });
  } catch (error: any) {
    throw new ApplicationError(
      error.message,
      error.errorType,
      error.fn,
      error.statusCode
    );
  }
};
