import { InferType } from "yup";
import { bodyRequestCreateFavYup } from "../validators/createFavValidator";
import { bodyRequestUpdateFavYup } from "../validators/updateFavValidator";

export type BodyRequestCreateFavs = InferType<typeof bodyRequestCreateFavYup>;

export type BodyRequesUpdateFavs = InferType<typeof bodyRequestUpdateFavYup>;
