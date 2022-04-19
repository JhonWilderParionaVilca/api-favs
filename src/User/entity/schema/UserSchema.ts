import { Schema } from "mongoose";
import type { User } from "../types/User";

export const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);
