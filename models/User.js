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
  progress: {
    beginner: {
      paid: { type: Boolean, default: false },
      completedLessons: [Number],
      completed: { type: Boolean, default: false },
    },
    intermediate: {
      paid: { type: Boolean, default: false },
      completedLessons: [Number],
      completed: { type: Boolean, default: false },
    },
    expert: {
      paid: { type: Boolean, default: false },
      completedLessons: [Number],
      completed: { type: Boolean, default: false },
    },
  },
  currentLevel: {
    type: String,
    enum: ["none", "beginner", "intermediate", "expert"],
    default: "none",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
