const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;


require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
const DB = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to db seccessfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port: http://localhost: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Products = mongoose.model("Products", productSchema);

// get all

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get product by id

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete by id

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Products.findByIdAndDelete(id);
    const products = await Products.find({});
    res.status(200).send({
      message: "deleted successfully",
      deletedProduct: deletedProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// post by id

app.post("/products", async (req, res) => {
  const newProduct = new Products({ ...req.body });
  try {
    await newProduct.save();
    res.status(201).send({
      message: "posted successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// update put by id
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.replaceOne({ _id: id }, { ...req.body });
    const updateProduct = await Products.findById(id);
    res
      .status(200)
      .send({ message: "updated successfully", data: updateProduct });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// update patch by id

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndUpdate(id, { ...req.body });
    const updateProduct = await Products.findById(id);
    res
      .status(200)
      .send({ message: "updated successfully", data: updateProduct });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
