import { Router } from "express";

import auth from "../../middleware/auth";
import getInvoices from "./controllers/getInvoices";
import addInvoice from "./controllers/addInvoice";

const invoicesRouter = Router();

invoicesRouter.use(auth);

invoicesRouter.get("/", getInvoices);
invoicesRouter.post("/", addInvoice);

export default invoicesRouter;
