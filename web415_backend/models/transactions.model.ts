import mongoose from "mongoose";

const transactionsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose?.Schema?.Types.ObjectId,
    required: true,
  },

  transaction_type: {
    type: String,
    required: true,
    enum: ["INCOME", "EXPENSE"],
  },

  amount: {
    type: Number,
    required: true,
  },
});

const transactionsModel = mongoose.model("transactions", transactionsSchema);

export default transactionsModel;
