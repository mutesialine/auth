const Item = require("../models/item");

const createPostItems = (req, res) => {
  const { name, description, image, price } = req.body;
  const item = new Item({
    image,
    name,
    description,
    price,
  });
  item
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const getAllItems = (req, res) => {
  Item.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const updateItems = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (result) {
        res.status(200).send("Updated item successfully"); // 200 OK
      } else {
        res.status(404).json({ error: "Item not found" }); // 404 Not Found
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" }); // 500 Internal Server Error
    });
};

const deleteItem = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
    .then((result) => {
      res.send("Item deleted successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createPostItems,
  getAllItems,
  updateItems,
  deleteItem,
};
