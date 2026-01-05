import { type Request, type Response } from "express";
import { goalModel } from "../models/goalmodel.js";


export const createGoal = async (req: Request, res: Response) => {
    try {
    const { title, description, deadline, isCompleted } = req.body;

    const goalCreated = await goalModel.create({
        title: title,
        description: description,
        deadline: deadline,
        isCompleted: isCompleted,
    });

    if(goalCreated) {
        return res.status(201).json({
            message: "goal created successfully",
            data: goalCreated._id
        })
    } else {
        return res.status(400).json({
            message: "goal not created",
        })
    }
} catch (e) {
    console.error("Error while creating goal", e );
    return res.status(500).json({
        message: "Internal server error",
    })
}
}

export const updateGoal = async (req: Request, res: Response) => {
    try{
    const id = req.params.id;
    const { title, description , deadline } = req.body;

    const goalUpdated = await goalModel.findByIdAndUpdate(id,
        {
            title,
            description,
            deadline
        },
        { new: true, runValidators: true },
    );

    if(goalUpdated) {
        return res.status(200).json({
            message: "Goal updated successfully",
            data: goalUpdated._id,
        });
    } else {
        return res.status(404).json({
            message: "error while updating goal",
        })
    }
} catch (e) {
    console.error("error while updating goal", e);
    return res.status(500).json({
        message: "Internal server error"
    })
}
}

export const getGoal = async (req: Request, res: Response) => {
    try{
    const goals = await goalModel.find();

    if(goals) {
        return res.status(200).json({
            data: goals,
        })
    } else {
        return res.status(404).json({
            message: "No goals found",
        })
    }
} catch(e) {
    console.error("Error while fetching goals", e);
    return res.status(500).json({
        message: "Internal server error",
    })
}
}

export const deleteGoal = async (req: Request, res: Response) => {
    try{
    const id = req.params.id;
    
    const goalDeleted = await goalModel.findByIdAndDelete(id);

    if(goalDeleted) {
        return res.status(201).json({
            message: "Goal deleted successfully"
        })
    } else {
        return res.status(404).json({
            message: "Failed to delete goal"
        })
    }
} catch (e) {
    console.error("Error while deleting goal", e);
    return res.status(500).json({
        message: "Internal Server Error",
    });
}
}