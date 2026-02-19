import { Request, Response } from "express";
import usersModel from "../../../models/users.model";
import bcrypt from "bcrypt";

const userRegister = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email) throw "Email is required!";
    if (!password) throw "Password is required!";

    const getEmail = await usersModel.findOne({
      email: email,
    });

    if (getEmail) throw "This email already exists";

    // save to db...

    // encrypt password using bcrypt..

    const hashedPassword = await bcrypt.hash(password, 12);

    // save hasedpassword instead of normal password
    await usersModel.create({
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      error: String(e),
    });
  }
};

export default userRegister;
