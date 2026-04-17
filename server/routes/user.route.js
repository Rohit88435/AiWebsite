import express from "express";
import { currentUser } from "../controllers/user.controller.js";
import isAuth from "../middlewares/isAuth.js";

const userRoute = express.Router();

userRoute.get("/currentuser", isAuth, currentUser);

export default userRoute;
