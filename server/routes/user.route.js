const {
  GetAllUsersController,
  DeleteAllUsersController,
  GetUserByIdController,
  UpdateUserByIdController,
  DeleteUserByIdController,
} = require("../controllers/user.controller");
const { UserUpdateValidationSchema, RunValidation } = require("../middlewares/inputValidation");

const userRouter = require("express").Router();


//get all users
userRouter.get("/", GetAllUsersController);
//delete all users
userRouter.delete("/", DeleteAllUsersController);

//get a single user by id
userRouter.get("/:id", GetUserByIdController);

//update a user by id
userRouter.put("/:id",
  UserUpdateValidationSchema,
  RunValidation,
   UpdateUserByIdController);

//delete a user by id
userRouter.delete("/:id", DeleteUserByIdController);



module.exports = userRouter;
