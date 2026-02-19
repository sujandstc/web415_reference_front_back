import { Request, Response } from "express";
import usersModel from "../../../models/users.model";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email) throw "Email is required!";
    if (!password) throw "Password is required!";

    const getUser = await usersModel.findOne({
      email: email,
    });

    if (!getUser) throw "Email not registered!";

    // check password against database cnecryption..

    const checkPassword = await bcrypt.compare(password, getUser.password);

    if (!checkPassword) throw "Email and password donot match!";

    // provide accesstoken to user .. or key..

    const accessToken = jwt.sign(
      {
        user_id: getUser._id,
      },
      String(process.env.secretKey),
      { expiresIn: "90 days" },
    );

    res.status(200).json({
      status: "success",
      accessToken,
    });
  } catch (e) {
    res.status(400).json({
      error: String(e),
    });
  }
};

export default userLogin;
