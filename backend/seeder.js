import mogoose from "mongoose";
import Product from "./models/productModel.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    const createProducts = await Product.insertMany(products);
    console.log("Data import done!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data del!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
