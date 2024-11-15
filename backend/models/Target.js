const mongoose = require("mongoose");
const { TradeCollectionName } = require("../enums/Trade");
const { TargetCollectionName } = require("../enums/Target");

const TargetSchema = new mongoose.Schema(
  {
    tradeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: TradeCollectionName,
      required: true,
    },
    targetPrice: { type: Number, required: true },
    sellPercentage: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(TargetCollectionName, TargetSchema);
