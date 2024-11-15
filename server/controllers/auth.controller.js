const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
require("dotenv").config();

const SignUpController = async (req, res) => {
  try {
    // check is user exists
    const existuser = await UserModel.findOne({ email: req.body.email });
    if (existuser) {
      return res.status(409).json({
        message: "Email is already used,try another",
        success: false,
      });
    }

    // hash the password
    // create new user object
    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      occupation: req.body.occupation,
      phoneNumber: req.body.phoneNumber,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      bloodGroup: req.body.bloodGroup,
      profilePic: req.body.profilePic,
    });
    // save the user to the database
    const created = await newUser.save();
    //
    if (created) {

      return res.status(201).json({
        message: "Registration successful",
        success: true,
        createdUser: {
          id: created._id,
          firstName: created.firstName,
          lastName: created.lastName,
          email: created.email,
          profilePic: created.profilePic,
          occupation: created.occupation,
          phoneNumber: created.phoneNumber,
          dateOfBirth: created.dateOfBirth,
          gender: created.gender,
          role: created.role,
          createdAt: created.createdAt,
        },
      });
    } else {
      res
        .status(500)
        .json({ message: "Failed to create account", success: false });
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};

//------------handle Login request------------

const LoginController = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    // If user is not found, return error message
    if (!user)
      return res
        .status(401)
        .json({ message: "No account created with this email" });
    // match the password from the request body with the hashed password in the database
    // const isMatch = await bcryptjs.compare(req.body.password, user.password);

    if (user.password !==req.body.password) {
       return res.status(401).json({ message: "wrong email or password" });}
    // If user is found and password is correct, create a token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "dkfujityokiujkkjiuys",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Logged in successfully",
      success: true,
      token: token,
      loggedInUser: {
        id: user._id,
      },
    });
    // server error
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

//------------export controllers------------
module.exports = { SignUpController, LoginController };
