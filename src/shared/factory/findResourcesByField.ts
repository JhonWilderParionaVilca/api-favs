import { Model as ModelType } from "mongoose";
import { ApplicationError } from "../customErrors/AplicationError";

export const findResourcesByField =
  <K>(Model: ModelType<K>) =>
  async <T>(field: T): Promise<any> => {
    try {
      const resource = await Model.find({ ...field });
      return resource;
    } catch (error: any) {
      throw new ApplicationError(
        "Error find resources",
        "mongoose",
        "findResourcesByField",
        500
      );
    }
  };
