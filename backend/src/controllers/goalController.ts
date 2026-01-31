import { type Request, type Response } from "express";
import { goalModel } from "../models/goalmodel.js";

export const createGoal = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const userID = req.userID;

    if (!userID) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const goalCreated = await goalModel.create({
      title: title,
      description: description,
      userID: userID,
    });

    if (goalCreated) {
      return res.status(201).json({
        message: "goal created successfully",
        data: goalCreated._id,
      });
    } else {
      return res.status(400).json({
        message: "goal not created",
      });
    }
  } catch (e) {
    console.error("Error while creating goal", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userID = req.userID;
    const { title, description } = req.body;

    if (!userID) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const goalUpdated = await goalModel.findOneAndUpdate(
      {
        _id: id,
        userID: userID,
      },
      { $set: { title, description }},
      {
        new: true,
        runValidators: true,
      }
    );

    if (goalUpdated) {
      return res.status(200).json({
        message: "Goal updated successfully",
        data: goalUpdated._id,
      });
    } else {
      return res.status(404).json({
        message: "error while updating goal",
      });
    }
  } catch (e) {
    console.error("error while updating goal", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getGoal = async (req: Request, res: Response) => {
  try {
    const userID = req.userID;

    if (!userID) {
        return res.status(401).json({message: "User not verified"})
    }

    const goals = await goalModel.find({userID: userID});

    if (goals) {
      return res.status(200).json({
        data: goals,
      });
    } else {
      return res.status(404).json({
        message: "No goals found",
      });
    }
  } catch (e) {
    console.error("Error while fetching goals", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteGoal = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userID = req.userID;

    if(!userID) {
        return res.status(401).json({message: "User not signed in"});
    }

    const goalDeleted = await goalModel.findOneAndDelete({_id: id, userID: userID});

    if (goalDeleted) {
      return res.status(201).json({
        message: "Goal deleted successfully",
      });
    } else {
      return res.status(404).json({
        message: "Failed to delete goal",
      });
    }
  } catch (e) {
    console.error("Error while deleting goal", e);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const tickGoal = async (req: Request, res:Response) => {
  try {
  const id = req.params.id;
  const userID = req.userID;
  const { isCompleted } = req.body;

  if(!userID) {
        return res.status(401).json({message: "User not signed in"});
    }

    const goalCompleted = await goalModel.findOneAndUpdate(
      {
        _id: id,
        userID: userID,
      },
      { $set: { isCompleted }},
      {
        new: true,
        runValidators: true,
      }
    );

    if(goalCompleted) {
      return res.status(200).json({
        message: "goal tick marked successfully"
      })
    }
  } catch (e) {
    console.error("error occured while doing tick mark", e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
} 