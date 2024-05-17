const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
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

const menuSchema = new Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    category: { type: String }
  },
  { timestamps: true }
);
const Menu = mongoose.model("Menu", menuSchema);

// get all menu

app.get("/menus", async (req, res) => {
  try {
    const menus = await Menu.find({});
    if (menus.length > 0) {
      res.status(200).send({ message: "success", data: menus });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get by id

app.get("/menus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menu.findById(id);
    if (menu) {
      res.status(200).send({ message: "successfully", data: menu });
    } else {
      res.status(204).send({ message: "data is empty" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// delete by id
app.delete("/menus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMenu = await Menu.findByIdAndDelete(id);
    const menus = await Menu.find({});
    res.status(200).send({
      message: "deleted successfully",
      deletedProduct: deletedMenu,
      allMenus: menus,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

// post by menu

app.post("/menus", async (req, res) => {
  const newMenu = new Menu({ ...req.body });
  try {
    await newMenu.save();
    res.status(201).send({
      message: "posted successfully",
      data: newMenu,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
