import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = () => {
  mongoose
    .connect(config.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB - ", err.message);
    });
};

export default connectDB;
