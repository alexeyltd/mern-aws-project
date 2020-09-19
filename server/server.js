const express = require("express");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(cors());
app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/api", authRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
