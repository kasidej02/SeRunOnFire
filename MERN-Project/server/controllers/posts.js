import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/postMessage.js";
import User from "../models/user.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  const { page } = req.query;
  try {
    const limit = 8;
    const startIndex = (Number(page) - 1) * limit;
    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSavedPost = async (req, res) => {
  if (!req.userId) return res.json({ message: "Unauthenticated." });

  try {
    const user = await User.findById(req.userId);

    let posts = await PostMessage.find({_id: {$in: user.saved}})
    // console.log(posts);
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    // const posts = await PostMessage.find({
    //   $or: [{ title }, { tags: { $in: tags.split(",") } }],
    // });
    const posts = await PostMessage.find({
      $or: [{ title }, { tags: title }],
    });
    // console.log(posts);
    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);
    // console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  const update = await PostMessage.findByIdAndUpdate(id, updatedPost, {
    new: true,
  });

  res.json(update);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated." });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like post

    post.likes.push(req.userId);
  } else {
    // dislike post

    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await PostMessage.findById(id);

  post.comments.push(value);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};

export const savePost = async (req, res) => {
  const { id } = req.params;
  // const { userId } = req.body;

  if (!req.userId) return res.json({ message: "Unauthenticated." });

  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No post with id: ${id}`);
  const post = await PostMessage.findById(id);
  const user = await User.findById(req.userId);
  const saved = user.saved.find((saved) => saved == id) ? true : false;
  if (!saved) {
    user.saved.push(id);
    const updatedUser = await User.findByIdAndUpdate(req.userId, user, {
      new: true,
    });
    // const data = new ObjectId({token:token,result:updatedUser})
    res.json({post,result:updatedUser});
    
  } else {
    return res.json({ message: "You had saved this post" });
  }
};

export const deleteSavedPost = async (req, res) => {
  const { postId , userId} = req.query;

  const user = await User.findById(userId)
  console.log(user.saved);
  const update = user.saved.filter((post) => post != postId)
  const updatedUser = await User.findByIdAndUpdate(userId,{saved: update},{new:true})
  res.json(updatedUser);
};


export default router;
