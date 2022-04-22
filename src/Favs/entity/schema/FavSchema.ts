import { Schema } from "mongoose";
import { FavList } from "../../types/Fav";

export const FavSchema = new Schema<FavList>(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, "name Fav list is required"],
    },
    items: [
      {
        name: {
          type: String,
          lowercase: true,
          trim: true,
          required: [true, "name Fav is required"],
        },
        description: {
          type: String,
          lowercase: true,
          trim: true,
          required: [true, "description Fav is required"],
        },
        link: {
          type: String,
          lowercase: true,
          trim: true,
          required: [true, "link Fav is required"],
        },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required to create a List of favorites"],
    },
  },
  {
    timestamps: true,
  }
);
