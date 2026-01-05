import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const DBConnect= async () => {
    await mongoose.connect(process.env.DBurl as string);
    console.log("Database connected successfully");
}