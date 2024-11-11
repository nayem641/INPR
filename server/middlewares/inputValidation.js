const { check, validationResult } = require("express-validator");

//-----------SignUp Validation Schema-----------

const SignUpValidationSchema = [
  check("email")
    .notEmpty()
    .withMessage("You must provide an email")
    .isEmail()
    .withMessage("Email must be valid"),
  // check("dateOfBirth")
  //   .notEmpty()
  //   .withMessage("Date of birth is required")
  //   .isISO8601()
  //   .toDate()
  //   .withMessage("Invalid date of birth "),

  check("password")
    .notEmpty()
    .withMessage("Don't leave password field empty")
    .isLength({ min: 5 })
    .withMessage("Password too short"),

  check("firstName").notEmpty().withMessage("First name is required"),

  check("lastName").notEmpty().withMessage("Last name is required"),

  check("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isNumeric()
    .withMessage("Invalid phone number"),
  // check("gender").notEmpty().withMessage("Gender is required"),
  // check("occupation").notEmpty().withMessage("Occupation is required"),
];

//-----------Login Validation Schema-----------

const LoginValidationSchema = [
  check("email")
    .notEmpty()
    .withMessage("Please enter your email ")
    .isEmail()
    .withMessage("Invalid email address"),

  check("password").notEmpty().withMessage("Please login with password"),
];


//----------User Update Validation Schema-----------

const UserUpdateValidationSchema = [
 

];



//-----------Run Validation middleware-----------

const RunValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      // message: "Invalid / missing fields",
      // message: errors.array()[0].msg,
      message:
        errors.array().length > 1
          ? "Don't leave any fields empty"
          : errors.array()[0].msg,
      success: false,
    });
  }
  next();
};


const RunLoginValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
  
      message:
        errors.array().length > 1
          ? "Login with your credentials"
          : errors.array()[0].msg,
      success: false,
    });
  }
  next();
};
//-----------Export Validation functions-----------

module.exports = {
  RunValidation,
  RunLoginValidation,
  SignUpValidationSchema,
  LoginValidationSchema,
  UserUpdateValidationSchema,
};
