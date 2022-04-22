import { Model as ModelType, ObjectId } from "mongoose";
import { ApplicationError } from "../customErrors/AplicationError";

export const updateOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async <T, Q>(field: T, fieldUpdate: Q): Promise<number> => {
    try {
      const { modifiedCount } = await Model.updateOne(
        { ...field },
        { ...fieldUpdate }
      );
      return modifiedCount;
    } catch (error: any) {
      throw new ApplicationError(
        error.message,
        "mongoose",
        "updateOneResourceByField",
        500
      );
    }
  };
