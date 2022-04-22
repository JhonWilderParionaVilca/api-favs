import { model } from "mongoose";
import { FavSchema } from "../schema/FavSchema";
import { FavList } from "../../types/Fav";

export const FavModel = model<FavList>("Fav", FavSchema);
