import mongoose from "mongoose";

const connectionString = "mongodb://mongo:27017/Products-shop";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB yes connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
