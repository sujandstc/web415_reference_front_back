import mongoose from "mongoose";

const invoicesSchema = new mongoose.Schema({
  user_id: {
    type: mongoose?.Schema?.Types.ObjectId,
    required: true,
  },

  customer_name: {
    type: String,
    required: true,
  },

  invoice_date: {
    type: Date,
    required: true,
  },

  items: [
    {
      item_name: { type: String },
      quantity: { type: Number },
      price: { type: Number },
    },
  ],

  total: {
    type: Number,
  },
});

const invoicesModel = mongoose.model("invoices", invoicesSchema);

export default invoicesModel;
