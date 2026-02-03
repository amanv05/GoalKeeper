import { type Request, type Response } from "express";
import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import z, { safeParse } from "zod";

export const Signup = async (req: Request, res: Response) => {
  const requiredBody = z.object({
    email: z.email(),
    password: z.string().min(8).max(20),
  });
  try {
    const parsedBody = requiredBody.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid Inputs",
        error: parsedBody.error,
      });
    }

    const { email, password } = parsedBody.data;

    const userExist = await userModel.findOne({
      email,
    });

    if (userExist) {
      return res.status(404).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await userModel.create({
      email,
      password: hashedPassword,
    });

    if (userCreated) {
      return res.status(201).json({
        message: "User signed up successfully",
      });
    } else {
      return res.status(409).json({
        message: "Error while signing up",
      });
    }
  } catch (e) {
    console.error("Error while signing up", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const Signin = async (req: Request, res: Response) => {
  const requiredBody = z.object({
    email: z.email(),
    password: z.string().min(8).max(20),
  });
  try {
    const parsedBody = requiredBody.safeParse(req.body);

    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Invalid inputs",
        error: parsedBody.error,
      });
    }

    const { email, password } = parsedBody.data;

    const userExist = await userModel.findOne({
      email,
    });

    if (!userExist) {
      return res.status(404).json({
        message: "User not exist",
      });
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    const token = jwt.sign(
      {
        id: userExist._id,
      },
      process.env.JWT_SECRET as string,
    );

    if (token) {
      return res.status(200).json({
        token: token,
        message: "User signed in successfully",
      });
    }
  } catch (e) {
    console.error("Error while signing in", e);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
