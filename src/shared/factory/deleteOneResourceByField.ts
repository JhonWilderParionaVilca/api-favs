import { Model as ModelType, ObjectId } from "mongoose";
import { ApplicationError } from "../customErrors/AplicationError";

export const deleteOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async <T>(field: T): Promise<number> => {
    try {
      const { deletedCount } = await Model.deleteOne({ ...field });
      return deletedCount;
    } catch (error: any) {
      throw new ApplicationError(
        error.message,
        "mongoose",
        "deleteOneResourceById",
        500
      );
    }
  };
