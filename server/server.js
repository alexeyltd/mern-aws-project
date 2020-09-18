const express = require("express");
const authRoutes = require("./routes/auth");

const app = express();

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
