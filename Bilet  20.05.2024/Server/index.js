const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const DB = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect(DB).then(() => {
  console.log("connected to succesfully");

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});

const productSchema = new Schema(
  {
    title: { type: String },
    imgSrc: { type: String },
    description: { type: String },
    rating: { type: Number },
    likes: { type: Number },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

// get all product

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//get by id product

app.get("products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).send({ message: "success by id", data: product });
    } else {
      res.status(204).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete by id

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    const products = await Product.find({});
    res.status(200).send({
      message: "deleted successfully",
      deleteProduct: deleteProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// post by product

app.post("/products", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  try {
    await newProduct.save();
    res.status(201).send({ message: "posted succesfully", data: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
