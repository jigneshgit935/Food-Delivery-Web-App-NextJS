import mongoose from 'mongoose';

console.log("jnjhhj");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;