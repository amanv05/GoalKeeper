import { Router } from "express";
const goalRouter = Router();
import { createGoal, deleteGoal, getGoal, updateGoal } from "../controllers/goalController.js";

goalRouter.post("/create", createGoal);
goalRouter.patch("/update/:id", updateGoal);
goalRouter.get("/", getGoal);
goalRouter.delete("/delete/:id", deleteGoal);

export default goalRouter;