import mongoose from "mongoose";
import { APP } from "../constants/app";
import Logger from "../shared/logger/appLogger";

export default (): void => {
  try {
    mongoose.connect(APP.DB_URL);
    mongoose.connection.on("error", (_) => {
      throw new Error("error connecting database");
    });
    mongoose.connection.once("connected", () =>
      Logger.info("Database Succesfully Connected!")
    );
  } catch (error) {
    throw new Error("error connecting database");
  }
};
