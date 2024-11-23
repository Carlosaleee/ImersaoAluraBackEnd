import express from "express";
import postsRoutes from "./src/routes/postsRoutes.js";

const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Registro das rotas
app.use("/posts", postsRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor Rodando com Sucesso ...");
}); 