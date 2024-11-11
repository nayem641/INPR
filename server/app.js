
const express = require("express");
const createError = require("http-errors");
const cors = require("cors");


const app = express();
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");

//cors setup
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect to mongodb
require("./config/db.config");


app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/posts", postRouter);

//---Client Error Handling---
app.use((req, res, next) => {
  next(createError(404, "Page not found"));
});

//error handling middleware
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message,
    success: false,
  });
});

module.exports = app;