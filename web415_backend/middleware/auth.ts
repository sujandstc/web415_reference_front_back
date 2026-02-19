import { NextFunction, Response } from "express";

import jwt from "jsonwebtoken";

const auth = (req: any, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed.",
    });
    return;
  }

  const token = authorizationHeader.split("Bearer ")[1];

  try {
    const checkToken = jwt.verify(token, process.env.secretKey!);
    // req.user vanne ma id  jwt token ko payload pathaune (card pathaune) so that aru request le user id sidhai req.user garera lina sakos
    req.user = checkToken;
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed! Invalid Token",
    });
    return;
  }

  next();
};
export default auth;
