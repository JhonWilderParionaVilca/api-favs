import { model } from "mongoose";
import { UserSchema } from "../schema/UserSchema";
import { User } from "../types/User";

export const UserModel = model<User>("User", UserSchema);
