const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");

// get a single user by id
const GetUserByIdController = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      user,
      success: true,
      message: "User found",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a user by id
const UpdateUserByIdController = async (req, res) => {
  try {
    // const post=await PostModel.updateMany({authorId:req.params.id},{authorPp:req.body.profilePic},{new:true})
    // console.log(post)
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user)
      return res
        .status(404)
        .json({ message: "something wrong while updating" });

    await res.status(200).json({
      user,
      success: true,
      message: "Profile updated ",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a user by id
const DeleteUserByIdController = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all users
const GetAllUsersController = async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//-------------very sensitive----------------------
const DeleteAllUsersController = async (req, res) => {
  try {
    await UserModel.deleteMany({});
    await PostModel.deleteMany({});

    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ------------------------ Operations Based On Email---------------------

//get a user by email
const GetUserByEmailController = async (req, res) => {
  try {
    const existuser = await UserModel.findOne({ email: req.params.email });
    if (!existuser) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a user by email

/////////////////////////////////////////////////////////////////////////
// export all controllers

module.exports = {
  GetUserByIdController,
  UpdateUserByIdController,
  DeleteUserByIdController,
  GetAllUsersController,
  DeleteAllUsersController,

  GetUserByEmailController,
};
