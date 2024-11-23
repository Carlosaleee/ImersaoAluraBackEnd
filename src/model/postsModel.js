import conectarAoBanco from "../config/dbConfig.js";
    
    // Conecta ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

    // Função assíncrona para obter todos os posts do banco de dados
    export async function getTodosPosts() {

    // Seleciona o banco de dados "ImersaoAlura"
    const db = conexao.db("ImersaoAlura");

    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");

    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

    export async function criarPost(novoPost){

    const db = conexao.db("ImersaoAlura");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}