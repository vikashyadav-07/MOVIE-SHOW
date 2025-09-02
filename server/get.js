import mongoose from "mongoose";
import Show from "./models/Show.js";
import 'dotenv/config';

// 🔹 MongoDB connection URI (replace with your own)
const MONGO_URI="mongodb+srv://vikash1kumar22b:aOlC9SqQ7u7OqF6V@cluster0.i5jvh5a.mongodb.net"

const getAllShows = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    // Fetch all shows
    const shows = await Show.find();
    console.log("📌 All Shows:", shows);

    // Close connection
    await mongoose.disconnect();
    console.log("🔒 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

// Run function
getAllShows();
