import express from 'express';
import auth from "../middleware/auth.js";
const router = express.Router();

import { signin, signup, updateUser, deleteUser } from '../controllers/user.js'


router.post('/signin', signin);
router.post('/signup', signup);
router.patch("/update", auth, updateUser);
// router.delete("/:id", auth, deleteUser);

export default router;