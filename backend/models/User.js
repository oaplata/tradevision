const mongoose = require("mongoose");
const { UserCollectionName } = require("../enums/User");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firebaseId: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    displayName: { type: String, required: true },
    initalCapital: { type: Number, required: true },
    workingCapital: { type: Number, required: true },
    globalRisk: { type: Number, required: true },
    maxFloatingProfit: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(UserCollectionName, UserSchema);
