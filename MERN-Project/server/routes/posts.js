import express from "express";
import {
  getPostsBySearch,
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  commentPost,
  deletePost,
  savePost,
  deleteSavedPost
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/saved", auth, deleteSavedPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);
router.post("/:id/save",auth, savePost);


export default router;
