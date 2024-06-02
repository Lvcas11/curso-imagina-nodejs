import mongoose from "mongoose";

const uri =
  "mongodb+srv://Cluster59111:a0lEdUtJa2Fx@cluster59111.4zlc3r3.mongodb.net/test";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
