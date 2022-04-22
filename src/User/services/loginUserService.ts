import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { findOneResourceByField } from "../../shared/factory/findOneResourceByField";
import { isValidPassword } from "../../utils/passwordManager";
import { createAuthToken } from "../../utils/tokenManager";
import { UserModel } from "../entity/models/UserModel";
import { User } from "../types/User";

export const loginUserService = async ({
  email,
  password,
}: User): Promise<string> => {
  try {
    // Obtener al usuario
    const user = await findOneResourceByField(UserModel)({ email });
    if (!user) {
      throw new ApplicationError(
        "Usuario o contraseña incorrecto",
        "auth",
        "loginUserService-findOneResourceByField",
        400
      );
    }
    // comparar password
    const isValid = await isValidPassword(password, user.password);
    if (!isValid) {
      throw new ApplicationError(
        "Usuario o contraseña incorrecto",
        "auth",
        "loginUserService-isValidPassword",
        400
      );
    }
    // crear el token
    const jwt = createAuthToken({ id: user.id });

    return jwt;
  } catch (error: any) {
    throw new ApplicationError(
      error.message,
      error.errorType,
      error.fn,
      error.statusCode
    );
  }
};
