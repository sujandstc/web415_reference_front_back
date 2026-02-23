import { Request, Response } from "express";
import invoicesModel from "../../../models/invoices.model";

const addInvoice = async (req: Request, res: Response) => {
  const { invoice_date, customer_name, items, total } = req.body;

  try {
    if (!invoice_date) throw "Invoice date is required";
    if (!customer_name) throw "customer_name is required";
    if (!items) throw "items is required";
    if (!total) throw "total is required";

    await invoicesModel.create({
      invoice_date,
      customer_name,
      items,
      total,
      user_id: req.user.user_id,
    });

    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
};

export default addInvoice;
