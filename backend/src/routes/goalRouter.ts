import { Router } from "express";
const goalRouter = Router();
import { createGoal, deleteGoal, getGoal, updateGoal } from "../controllers/goalController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

goalRouter.post("/create", userMiddleware, createGoal);
goalRouter.patch("/update/:id", userMiddleware, updateGoal);
goalRouter.get("/", userMiddleware, getGoal);
goalRouter.delete("/delete/:id", userMiddleware, deleteGoal);

export default goalRouter;