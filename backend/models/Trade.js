const mongoose = require("mongoose");
const { UserCollectionName } = require("../enums/User");
const {
  TradeOperationType,
  TradeEntryTrigger,
  TradeTimeframeTrigger,
  TradeStatus,
  TradeCollectionName,
} = require("../enums/Trade");

const TradeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: UserCollectionName,
      required: true,
    },
    asset: { type: String, required: true },
    operationType: {
      type: String,
      enum: Object.values(TradeOperationType),
      required: true,
    },
    entryPrice: { type: Number, required: true },
    entryTrigger: {
      type: String,
      enum: Object.values(TradeEntryTrigger),
      required: true,
    },
    timeframeTrigger: {
      type: String,
      enum: Object.values(TradeTimeframeTrigger),
    },
    stopLoss: { type: Number, required: true },
    breakeven: { type: Number },
    riskPercentage: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(TradeStatus),
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(TradeCollectionName, TradeSchema);
