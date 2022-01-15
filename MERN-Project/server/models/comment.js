import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    creator: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

export default mongoose.model('Comment', commentSchema);

