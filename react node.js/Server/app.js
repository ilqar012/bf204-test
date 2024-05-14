const express = require("express");
const products = require("./db.js");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get all products

app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.send({ message: "data is empty" }).status(204);
  }
});

// product by id

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((i) => i.id == id);
  if (product !== undefined) {
    res.status(200).send({
      data: product,
      message: "success",
    });
  } else {
    res.send({ message: "data is empty" }).status(404);
  }
});

// delete product by id

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const idx = products.findIndex((i) => i.id == id);
  if (idx === -1) {
    res.status(404).send({ message: "failed delete" });
  } else {
    const deleteProduct = products.splice(idx, 1);
    res.status(200).send({
      message: "successfully",
      data: deleteProduct,
    });
  }
});

// post by id
app.post("/products", (req, res) => {
  const { title, price, description, category, image, rating } = req.body;

  const product = {
    id: uuid.v4(),
    title,
    price,
    description,
    category,
    image,
    rating,
  };

  products.push(product);
  res.status(201).send({
    message: "successfully",
    data: product,
  });
});

// put bt id

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image, rating } = req.body;

  const idx = products.findIndex((i) => i.id === id);

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  };

  products.splice(idx, 1, product);
  res.status(200).send({
    message: "successfully",
    data: product,
  });
});

// patch by id

app.patch("/products/:id", (req, res) => {
  const { id } = re.params;
  const { title, price, description, category, image, rating } = req.body;
  const product = products.find((i) => i.id === id);

  if (title !== undefined) {
    product.title = title;
  }
  if (price !== undefined) {
    product.price = price;
  }
  if (description !== undefined) {
    product.description = description;
  }
  if (category !== undefined) {
    product.category = category;
  }
  if (image !== undefined) {
    product.image = image;
  }
  if (rating !== undefined) {
    product.rating = rating;
  }

  res.status(200).send({
    message: "successfully",
    data: product,
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
