import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false).connect(process.env.BD_URI);
};

export default connectDB;
