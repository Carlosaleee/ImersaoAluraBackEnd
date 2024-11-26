import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controller/postsController.js";

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define a pasta para salvar os arquivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Mantém o nome original do arquivo
  },
});

const upload = multer({ storage }); // Middleware para upload

const router = express.Router(); // Criação do router

// Rota para obter todos os posts
router.get("/", listarPosts);

// Rota para criar um novo post
router.post("/", postarNovoPost);

// Rota para upload de imagens
router.post("/upload", upload.single("imagem"), uploadImagem);

// Exporta o objeto router
export default router;
