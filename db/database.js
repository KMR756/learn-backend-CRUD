import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log(`mongoDB connected...`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
