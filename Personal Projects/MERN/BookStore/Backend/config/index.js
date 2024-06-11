import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`\n MongoDB connected !! DB Host: ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    process.exit(1);
  }
};
