const express = require("express");

//----------Controllers---------------
const {
  SignUpController,
  LoginController,
} = require("../controllers/auth.controller");

//----------Middlewares---------------
const {
  RunValidation,
  SignUpValidationSchema,
  LoginValidationSchema,
  RunLoginValidation,
} = require("../middlewares/inputValidation");
const authRouter = express.Router();

//------REGISTER route------
authRouter.post("/signup",
  SignUpValidationSchema, 
  RunValidation,
  SignUpController
);

//---------Log In route---------
authRouter.post("/login", 
    LoginValidationSchema,
    RunLoginValidation,
    LoginController,
);

module.exports = authRouter;
