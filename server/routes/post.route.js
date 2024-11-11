const postRouter = require("express").Router();
const { createPost, getAllPosts, deleteAllPosts, getPostById, updatePostById, updatePostByAuthorId, getPostsByAuthorId, deletePostById } = require("../controllers/post.controller");
const PostModel = require("../models/post.model");

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.delete("/", deleteAllPosts);

postRouter.get("/:id",getPostById );
postRouter.put("/:id",updatePostById);
postRouter.put("/author/:authorId",updatePostByAuthorId);
postRouter.get("/author/:authorId", getPostsByAuthorId);

postRouter.delete("/:id", deletePostById);

module.exports = postRouter;
