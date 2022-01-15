import express from 'express';
import mongoose from 'mongoose';

import Comment from '../models/comment.js';

const router = express.Router();

export const getComments = async (req, res) => { 
    try {
        const comments = await Comment.find();
                
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getComment = async (req, res) => { 
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);
        
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createComment = async (req, res) => {
    const comment = req.body;

    const newComment = new Comment({ ...comment, creator: req.userId, createdAt: new Date().toISOString() });

    try {
        await newComment.save();

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateComment = async (req, res) => {
    const { id } = req.params;
    const {message, creator} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comment with id: ${id}`);

    const updatedcomment = { creator, message,  _id: id };

    await Comment.findByIdAndUpdate(id, updatedcomment, { new: true });

    res.json(updatedcomment);
}

export const deleteComment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comment with id: ${id}`);

    await Comment.findByIdAndRemove(id);

    res.json({ message: "comment deleted successfully." });
}


export default router;