import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.DBurl as string);
    console.log("Database connected successfully");
  } catch (e) {
    console.error("error while connecting db", e);
  }
};
