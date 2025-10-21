import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode: { type: String, required: true },
    longUrl: { type: String, required: true }
});

export const urls = mongoose.model("urls", urlSchema);
