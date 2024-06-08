import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"


export const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.jsontoken || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Please login to access this route");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    

    const user = await User.findById(decoded.id).select("-password");
    

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    req.user = user;

    next();


  } catch (error) {
    res.status(401).json({ message: 'Not authorized' });
  }
};
