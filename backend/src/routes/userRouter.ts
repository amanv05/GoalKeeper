import { Router } from "express";
import { Signin, Signup } from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("/signup", Signup);
userRouter.post("/signin", Signin);


export default userRouter;