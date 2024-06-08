import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"

//register new user
const register = asyncHandler(async (req, res) => {
  //getting data from body
  const { name, email, phone, password } = req.body;
  //checking if empty
  if (!name || !phone || !password) {
    throw new ApiError(400, "Please provide all fields");
  }
  //if userexits already
  let userExists = await User.findOne({
    phone
  });
  //throwing errror if exist
  if (userExists) {
    throw new ApiError(400, "User already exists");
  }

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    phone,
    password : hashedPassword
  });

  if (!user) {
    throw new ApiError(400, "Error while saving user");
  }

  res.status(201)
    .json(new ApiResponse(201, user, "User Registered SuccesFully"));

})


//login user

const login = asyncHandler(async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    throw new ApiError(400, "Please provide all fields");
  }

  let userExists = await User.findOne({
    phone
  });

  if (!userExists) {
    throw new ApiError(400, "User does not exists");
  }


  const isMatch = await bcrypt.compare(password, userExists.password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });


  const cookieOption = {
    httpOnly: true
  }

  res.status(200)
    .cookie("jsontoken", token, cookieOption)
    .json(new ApiResponse(200, { token }, "User Logged In SuccesFully"));

})

export {
  register,
  login
}