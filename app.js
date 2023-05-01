require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);

//configure mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
