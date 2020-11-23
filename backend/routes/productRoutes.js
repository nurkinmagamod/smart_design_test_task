import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@desc Fetch all products or find products by field
//@ route GET /api/products
//@accsess Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({
      $or: [
        { name: { $regex: req.query.search, $options: "si" } },
        { description: { $regex: req.query.search, $options: "si" } },
        { "parameter.ram": req.query.search },
        { "parameter.weight": req.query.search },
      ],
    });
    res.json(products);
  })
);
//@desc Fetch single product
//@ route GET /api/products/:id
//@accsess Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
//@desc Post product
//@ route POST /api/products/
//@accsess Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, description, parameter } = req.body;
    const product = new Product({
      name: name,
      description: description,
      parameter: parameter,
    });
    const createProduct = await product.save();
    if (createProduct) {
      return res
        .status(201)
        .send({ message: "New Product Created", data: createProduct });
    }
    return res.status(500).send({ message: " Error in Creating Product." });
  })
);
export default router;
