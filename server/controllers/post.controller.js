const PostModel = require("../models/post.model");

const createPost=async (req, res) => {
  try {
    const newPost = new PostModel({
      text: req.body.text,
      image: req.body.image,
      video: req.body.video,
     
      authorPp: req.body.authorPp,
      authorId: req.body.authorId,
      authorName: req.body.authorName,
    });
    const createdPost = await newPost.save();
    res.status(201).json({
      createdPost,
      message: "Post created ",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
}

const getAllPosts=async (req, res) => {
  try {
    const posts = await PostModel.find({});
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}


const deleteAllPosts=async (req, res) => {
  try {
    await PostModel.deleteMany({});
    res.status(200).json({ message: "All posts deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

const getPostById= async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Post not found", success: false });
  }
}
const updatePostById= async (req, res) => {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text },
      { new: true }
    );
    res.status(200).json({
      updatedPost,
      message: "Post updated successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
}

const deletePostById= async (req, res) => {
  try {
    const deletedPost = await PostModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      deletedPost,
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(404).json({ message: "Post not found", success: false });
  }
}

const updatePostByAuthorId=  async (req, res) => {
  try {
    const updatedPost = await PostModel.updateMany(
      { authorId: req.params.authorId },
      req.body,
      { new: true }
    );
    console.log(updatedPost);
    res.status(200).json({
      updatedPost,
      message: "Also updated author's info",
      success: true,
    });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
}
const getPostsByAuthorId= async (req, res) => {
  try {
    const posts = await PostModel.find({ authorId: req.params.authorId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

module.exports = {
    createPost,
    getAllPosts,
    deleteAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    updatePostByAuthorId,
    getPostsByAuthorId,
}