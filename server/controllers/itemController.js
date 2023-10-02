const Item = require("../models/item");

const createPostItems = async (req, res) => {
  try {
    const { name, description, image, price } = req.body;
    const item = new Item({
      image,
      name,
      description,
      price,
    });
    const result = await item.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllItems = async (req, res) => {
  try {
    const result = await Item.find();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateItems = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Item.findByIdAndUpdate(id, req.body);
    if (result) {
      res.status(200).send("Updated item successfully");
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Item.findByIdAndDelete(id);
    if (result) {
      res.send("Item deleted successfully");
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPostItems,
  getAllItems,
  updateItems,
  deleteItem,
};
