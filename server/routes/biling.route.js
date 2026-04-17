import express from "express";
import { biling } from "../controllers/biiling.controllers.js";
import isAuth from "../middlewares/isAuth.js";

const billingRoute = express.Router();

billingRoute.post("/", isAuth, biling);

export default billingRoute;
