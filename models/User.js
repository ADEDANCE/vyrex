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
  access: {
    beginner: {
      type: Boolean,
      default: false,
    },

    intermediate: {
      type: Boolean,
      default: false,
    },

    expert: {
      type: Boolean,
      default: false,
    },
  },

  certificates: {
    beginner: {
      claimed: {
        type: Boolean,
        default: false,
      },
      claimedAt: {
        type: Date,
        default: null,
      },
    },

    intermediate: {
      claimed: {
        type: Boolean,
        default: false,
      },
      claimedAt: {
        type: Date,
        default: null,
      },
    },

    expert: {
      claimed: {
        type: Boolean,
        default: false,
      },
      claimedAt: {
        type: Date,
        default: null,
      },
    },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
