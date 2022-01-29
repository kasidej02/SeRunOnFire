import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";

import User from "../models/user.js";

const router = express.Router();
const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log("user not found")
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password." });

    const token = jwt.sign(
      {
        email: existingUser.email,
        userId: existingUser._id,
        id: existingUser._id,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something Wrong." });
  }
};

 //bug
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
 
  console.log(email, password, confirmPassword,  firstName, lastName );
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password  does not match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    console.log(result);
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something Wrong." });
  }
};

export const updateUser = async (req, res) => {
  // const { id } = req.params;
  const { name, email, password } = req.body;

  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No user with id: ${id}`);
  const hashedPassword = await bcrypt.hash(password, 12);
  const update = { name, email, password:hashedPassword, _id: req.userId};

  const updateUser = await User.findByIdAndUpdate(req.userId, update, {
    new: true,
  });

  res.json(updateUser);
};

export const deleteUser = async (req, res) => {
  // const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  await User.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};

export default router;