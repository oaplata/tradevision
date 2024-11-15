const mongoose = require("mongoose");
const { AssetType, AssetCollectionName } = require("../enums/Asset");

const AssetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: Object.values(AssetType),
      required: true,
    },
    logoUrl: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model(AssetCollectionName, AssetSchema);
