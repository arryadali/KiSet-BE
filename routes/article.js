import express from "express";

const router = express.Router();

import {
  createArticle,
  deleteArticle,
  detailArticle,
  getArticle,
} from "../controller/articleController.js";

router.post("/article", createArticle);

router.get("/article", getArticle);

router.delete("/article/:id", deleteArticle);

router.get("/article/:id", detailArticle);

export default router;
