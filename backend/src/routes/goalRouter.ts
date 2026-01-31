import { Router } from "express";
const goalRouter = Router();
import { createGoal, deleteGoal, getGoal, updateGoal, tickGoal } from "../controllers/goalController.js";
import { userMiddleware } from "../middleware/userMiddleware.js";

goalRouter.post("/create", userMiddleware, createGoal);
goalRouter.patch("/update/:id", userMiddleware, updateGoal);
goalRouter.get("/", userMiddleware, getGoal);
goalRouter.delete("/delete/:id", userMiddleware, deleteGoal);
goalRouter.patch("/completed/:id", userMiddleware, tickGoal)

export default goalRouter;