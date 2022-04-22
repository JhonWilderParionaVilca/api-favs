import { NextFunction, Request, Response } from "express";
import { validateToken } from "../../utils/tokenManager";
import { ApplicationError } from "../customErrors/AplicationError";

export const userTokenVerification = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return next(
        new ApplicationError(
          "Unauthorized",
          "auth",
          "userTokenVerification - authorization",
          403
        )
      );
    const bearerToken = authorization.split(" ")[1];
    const { id } = validateToken(bearerToken);

    if (!id)
      return next(
        new ApplicationError(
          "Unauthorized",
          "auth",
          "userTokenVerification - id",
          403
        )
      );

    req.userId = id;

    return next();
  } catch (error: any) {
    return next(
      new ApplicationError(
        error.message,
        "auth",
        "userTokenVerification",
        error.message === "jwt expired" ? 403 : 401
      )
    );
  }
};
