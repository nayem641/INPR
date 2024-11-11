const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  text: { type: String },
  image: { type: String },
    caption: { type: String },
  video: { type: String },
    authorId: {
      type: String,
    },
    authorName: {
      type: String,
    },
    authorPp: {
      type: String, 
  },
  postedAt: { type: String, default: Date.now },
 
});

const PostModel = mongoose.model("Posts", postSchema);

module.exports = PostModel;
