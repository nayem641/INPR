//make a story schema and model including text audio video likes,author likeAuthor postedAt
const mongoose = require("mongoose");
const storySchema = new mongoose.Schema({
  text: { type: String },
  audio: { type: String },
  video: { type: String },
  author: { type: String },
  likeAuthor: { type: String },
  postedAt: { type: Date, default: Date.now },
  comments: [
    {
      text: { type: String },
      author: { type: String },
      postedAt: { type: Date, default: Date.now },
    },
  ],
  likes: [
    {
      numberOfLikes: { type: Number, default: 0 },
      author: { type: String },
    },
  ],
});
