// models/Donor.js
const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    receiptNumber: String,
    receiptDate: Date,
    amount: Number,
    enrolledBy: String,
    donorId: String,
    donorName: String,
    attendence:{type:Boolean,default:false},
    mobileNumber: {
      type: String,
      required: true,
      index: true, // 🔥 important for search
    },
    sevaSubCategoryCode: String,
    type: String,
  },
  { timestamps: true }
  
);

module.exports = mongoose.model("Donor", donorSchema);