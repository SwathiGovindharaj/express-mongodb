require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const postRouter = require("./routes/PostRoutes");

const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/posts", postRouter);

//configure mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
