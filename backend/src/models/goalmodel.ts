import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true }
});

export const goalModel = mongoose.model("Goals", goalSchema);