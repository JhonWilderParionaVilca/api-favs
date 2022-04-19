import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ApplicationError } from "../customErrors/AplicationError";
import Logger from "../logger/appLogger";

export const requestValidator =
  (schema: yup.ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      return next();
    } catch (error: any) {
      Logger.error(`error validating body request ${error.message}`, {
        instance: "requestValidator - middlewares schema validation",
        trace: error.message,
      });

      return next(
        new ApplicationError(
          error.message,
          "validation",
          "requestValidators",
          400
        )
      );
    }
  };
