import { Model as ModelType } from "mongoose";
import { ApplicationError } from "../customErrors/AplicationError";

export const createResource =
  <K>(Model: ModelType<K>) =>
  async <T>(resource: T): Promise<any> => {
    try {
      const newResource = new Model(resource);
      const savedResource = await newResource.save();
      return savedResource;
    } catch (error: any) {
      throw new ApplicationError(
        error.message,
        "mongoose",
        "createResource",
        500
      );
    }
  };
