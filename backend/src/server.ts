import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { DBConnect } from "./db.js";
import goalRouter from "./routes/goalRoute.js";
DBConnect();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/v1/goal", goalRouter);

app.listen(PORT, () => {
  console.log("Server is Running");
});
