import express from "express";
import { listarPosts } from "../controller/postsController.js";

// Habilita o parsing de JSON no corpo das requisições
    const routes = (app) => {
        app.use(express.json());

// Rota para obter todos os posts
    app.get("/posts", listarPosts);

}

export default routes;