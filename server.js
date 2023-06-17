import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import articleRoutes from "./routes/article.js";

dotenv.config();

// db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// routes
app.use("/api", articleRoutes);

app.listen(5000, () => {
  console.log("Server Connected");
});
