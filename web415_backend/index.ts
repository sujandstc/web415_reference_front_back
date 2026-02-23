import express from "express";
import userRouter from "./modules/user/user.routes";
import mongoose from "mongoose";
import cors from "cors";
import invoicesRouter from "./modules/invoices/invoices.routes";

require("dotenv").config();

const server = express();

server.use(express.json());

server.use(cors());

server.listen(8000, async () => {
  console.log("Server started successfully!");

  await mongoose.connect(String(process?.env?.mongo_url));

  console.log("Connected to database successfully");
});

server.use("/user", userRouter);
// for invoice generator project..
server.use("/invoices", invoicesRouter);
