import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    parameter: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { strict: false }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
