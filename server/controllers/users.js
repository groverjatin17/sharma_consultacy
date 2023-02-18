import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return req.status(404).json({ message: "User does not exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials." });

    const token = jwt.sign(
      {
        name: existingUser.name,
        email: existingUser.email,
        id: existingUser._id,
      },
      "sharmarecruits",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (existingUser)
      return res.status(409).json({ message: "User already exist" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      {
        name: result.name,
        email: result.email,
        id: result._id,
      },
      "sharmarecruits",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
