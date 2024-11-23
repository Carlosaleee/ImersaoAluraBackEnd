import express from "express";
import { listarPosts, postarNovoPost } from "../controller/postsController.js";

// Habilita o parsing de JSON no corpo das requisições

    const routes = (app) => {
        app.use(express.json());

// Rota para obter todos os posts

    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)

}

export default routes;