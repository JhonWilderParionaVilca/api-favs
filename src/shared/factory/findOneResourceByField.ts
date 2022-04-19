import { Model as ModelType } from "mongoose";
import { ApplicationError } from "../customErrors/AplicationError";

export const findOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async <T>(field: T): Promise<any> => {
    try {
      const resource = await Model.findOne({ ...field });
      return resource;
    } catch (error: any) {
      throw new ApplicationError(
        "Error find resource",
        "mongoose",
        "findOneResourceByField",
        500
      );
    }
  };
