import { Request, Response } from "express";
import invoicesModel from "../../../models/invoices.model";

const getInvoices = async (req: Request, res: Response) => {
  const data = await invoicesModel.find({
    user_id: req.user.user_id,
  });

  res.status(200).json({
    status: "success",
    data,
  });
};

export default getInvoices;
