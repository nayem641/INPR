//connect to mongodb

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Nayem:Nayem12345@mongocluster.4a8vm7l.mongodb.net/inprBOOK"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
 