const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  information: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    profile_pic: { type: String, required: true },
    cover_pic: { type: String, required: true },
    website: { type: String, required: true },
    phone_number: { type: String, required: true },
  },
  isDocter: { type: Boolean, default: false },
  doc_info: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doc_info",
  },
});

module.exports = mongoose.model("User", userSchema);
