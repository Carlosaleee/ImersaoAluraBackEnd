import getTodosPosts from "../model/postsModel.js";

export async function listarPosts(req, res) {

    // Chama a função para obter os posts do banco de dados
    const posts = await getTodosPosts();

    // Envia os posts como resposta em formato JSON com status 200 (OK)
    res.status(200).json(posts);
}

