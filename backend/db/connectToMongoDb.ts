import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDb = async () => {
  try {
    // const mongoDbUrl = process.env.MONGO_DB_URL;
    // if (!mongoDbUrl) {
    //   throw new Error(
    //     "MONGO_DB_URL is not defined in the environment variables."
    //   );
    // }

    await mongoose.connect("mongodb://localhost:27017/chatApp");
    console.log("connected to mongoDb");
  } catch (error) {
    console.log("could'nt connect to mongoDb", error);
  }
};
export default connectToMongoDb;
