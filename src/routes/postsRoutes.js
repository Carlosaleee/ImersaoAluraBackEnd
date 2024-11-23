import express from "express";
import { listarPosts, postarNovoPost } from "../controller/postsController.js";

const router = express.Router();

// Rota para obter todos os posts
router.get("/posts", listarPosts);

// Rota para criar um novo post
router.post("/", postarNovoPost);

// Exporta o objeto Router
export default router;