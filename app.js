import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

//middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())


//importing Route
import userRoute from "./routes/user.route.js";
import spamRoute from "./routes/spam.route.js";

//using Route
app.use("/api/users", userRoute);
app.use("/api/spam", spamRoute);


//exporting app
export default app;