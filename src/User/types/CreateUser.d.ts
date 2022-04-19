import { InferType } from "yup";
import { bodyRequestCreateUserYup } from "../validators/createUserValidator";

export type BodyRequestCreateUser = InferType<typeof bodyRequestCreateUserYup>;
