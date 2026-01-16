import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "User not signed in",
      });
    }

    if(!authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            message: "Invalid token format",
        });
    }

    const token = authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({message: "Invalid token"})
    }

    const tokenVerified = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { id: string };

    if (tokenVerified) {
      req.userID = tokenVerified.id;
      next();
    } else {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  } catch (e) {
    console.error("User not signed in", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
