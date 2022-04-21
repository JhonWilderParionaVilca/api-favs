import { ApplicationError } from "../../shared/customErrors/AplicationError";
import { createResource } from "../../shared/factory/createResource";
import { encryptPassword } from "../../utils/passwordManager";
import { UserModel } from "../entity/models/UserModel";
import { User } from "../types/User";

// encryptPassword
export const createUserService = async ({ email, password }: User) => {
  try {
    const encryptedPassword = await encryptPassword(password);

    await createResource(UserModel)({
      email,
      password: encryptedPassword,
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
