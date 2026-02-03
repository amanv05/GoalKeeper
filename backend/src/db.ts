import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const DBConnect = async () => {
  try {
    if (!process.env.DBUrl) {
      throw new Error("MONGO_URI is missing");
    }

    await mongoose.connect(process.env.DBUrl as string);
    console.log("Database connected successfully");
  } catch (e) {
    console.error("error while connecting db", e);
  }
};
