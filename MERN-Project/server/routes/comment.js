import express from 'express';
import { getComments, createComment, updateComment, deleteComment } from '../controllers/Comment.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getComments);
router.Comment('/',auth,  createComment);
router.patch('/:id', auth, updateComment);
router.delete('/:id', auth, deleteComment);
// router.patch('/:id/likeComment', auth, likeComment);

export default router;