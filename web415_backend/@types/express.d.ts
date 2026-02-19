import { Request } from "express";

interface IUserData {
  business_id: any;
}

declare module "express" {
  interface Request {
    user?: any | IUserData;
  }
}
