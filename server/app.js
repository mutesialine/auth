const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const cors = require("cors");

dotenv.config();
const app = express();
const corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

const dbURI = process.env.dbURI;
mongoose
  .connect(dbURI)
  .then((result) => console.log("connected to the db"))
  .catch((err) => console.log(err));

app.use("/", userRoutes);
app.use("/item", itemRoutes);

app.listen(3000, "localhost", () => {
  console.log("listening the local host ");
});
