import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import connectDb from "./config/db.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import websiteRoute from "./routes/website.route.js";
import billingRoute from "./routes/biling.route.js";
import { stripeWebhook } from "./controllers/stripeWebhook.controller.js";

const app = express();

app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://aiwebsite-1-ddaf.onrender.com/",
    credentials: true,
  }),
);
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
  next();
});

// Add security headers for popup/window operations
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/website", websiteRoute);
app.use("/api/biling", billingRoute);

app.listen(port, () => {
  console.log("server started");
  connectDb();
});
