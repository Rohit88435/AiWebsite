import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {
  changes,
  deploy,
  generateWebiste,
  getAll,
  getBySlug,
  getWebsiteById,
} from "../controllers/website.controller.js";

const websiteRoute = express.Router();

websiteRoute.post("/generate", isAuth, generateWebiste);
websiteRoute.post("/update/:id", isAuth, changes);
websiteRoute.get("/getall", isAuth, getAll);
websiteRoute.get("/getbyid/:id", isAuth, getWebsiteById);
websiteRoute.get("/getbyslug/:slug", getBySlug);
websiteRoute.get("/deploy/:id", isAuth, deploy);

export default websiteRoute;
