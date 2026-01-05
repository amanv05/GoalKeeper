import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
}, { timestamps: true });

export const goalModel = mongoose.model("goals", goalSchema);