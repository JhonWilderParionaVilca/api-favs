import { InferType } from "yup";
import { bodyRequestCreateFavYup } from "../validators/createFavValidator";

export type BodyRequestCreateFavs = InferType<typeof bodyRequestCreateFavYup>;
