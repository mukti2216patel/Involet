const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("./user");
const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  billingAddress: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  taxId: { type: String, required: true },
  notes: { type: String, required: true },
  status: { type: String, required: true , default : "Active"},
  userId :{type : mongoose.Schema.Types.ObjectId , ref : userModel , required : true},
  createdAt: { type: Date, default: Date.now },
});

clientSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

clientSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

module.exports = mongoose.model("clientModel", clientSchema);
