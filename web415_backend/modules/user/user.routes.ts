import { Router } from "express";
import userLogin from "./controllers/userLogin";
import userRegister from "./controllers/userRegister";
import myProfile from "./controllers/myProfile";
import auth from "../../middleware/auth";

const userRouter = Router();

userRouter.post("/login", userLogin);
userRouter.post("/register", userRegister);

userRouter.get("/profile", auth, myProfile);

export default userRouter;
