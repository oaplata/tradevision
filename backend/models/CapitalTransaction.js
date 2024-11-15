const mongoose = require("mongoose");
const {
  CapitalTransactionType,
  CapitalTransactionCollectionName,
} = require("../enums/CapitalTransaction");
const { UserCollectionName } = require("../enums/User");
const { TradeCollectionName } = require("../enums/Trade");

const CapitalTransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserCollectionName,
      required: true,
    },
    tradeId: { type: mongoose.Schema.Types.ObjectId, ref: TradeCollectionName },
    type: {
      type: String,
      enum: Object.values(CapitalTransactionType),
      required: true,
    },
    amount: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  CapitalTransactionCollectionName,
  CapitalTransactionSchema
);
