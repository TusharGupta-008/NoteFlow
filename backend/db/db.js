import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Yes !!!!!! , DB connected ");
  } catch (error) {
    console.log("NO, DB not connected ");
  }
};

export default connectDb;
