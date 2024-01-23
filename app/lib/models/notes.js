import mongoose from "mongoose";

const Notes = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.ObjectId
})

export default mongoose.models.Notes || mongoose.model('Notes', Notes);