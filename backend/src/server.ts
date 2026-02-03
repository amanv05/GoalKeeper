import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { DBConnect } from "./db.js";
import goalRouter from "./routes/goalRouter.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
DBConnect();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
const PORT = process.env.PORT;

app.use("/api/v1/goal", goalRouter);
app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log("Server is Running");
});
