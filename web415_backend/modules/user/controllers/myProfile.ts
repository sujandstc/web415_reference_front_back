import { Request, Response } from "express";

const myProfile = async (req: Request, res: Response) => {
  //get user data from auth middleware.. esko lagi need to have @types folder on root directory or it will throw error >> req.user does not exist.
  const user = req.user;

  res.status(200).json({
    status: "success",
    user_id: user.user_id,
  });
};

export default myProfile;
