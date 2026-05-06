import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  beginnerPaid: {
    type: Boolean,
    default: false,
  },
  currentLevel: {
    type: String,
    default: "none",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
