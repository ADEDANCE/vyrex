import mongoose from "mongoose";

export async function db() {
  try {
    // If already connected, do nothing
    if (mongoose.connection.readyState >= 1) {
      console.log("Using existing DB connection");
      return;
    }

    //  Otherwise, connect
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected");
  } catch (error) {
    console.log("Database connection error:", error);
    throw error; //  for debugging
  }
}
