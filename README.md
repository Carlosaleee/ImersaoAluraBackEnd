# Imersão Alura Back-End - Google Gemini 🚀

Este repositório contém os projetos e atividades desenvolvidos durante a **Imersão Alura Back-End**, promovida pela Alura em parceria com o Google Gemini. O objetivo principal foi aprofundar conhecimentos em desenvolvimento back-end, com foco na estruturação de APIs, integração com bancos de dados, e boas práticas de desenvolvimento.

---

## 📋 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework para construção de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL utilizado para persistência de dados.
- **Postman**: Ferramenta para testar e documentar APIs.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

---

## 📂 Estrutura do Projeto

A estrutura do repositório foi reorganizada para seguir boas práticas de desenvolvimento back-end com Node.js:

```
ImersaoAluraBackEnd/
├── node_modules/          (dependências instaladas pelo npm)
├── src/                   (código-fonte principal do projeto)
│   ├── config/            (arquivos de configuração, ex.: conexão com banco de dados)
│   │   └── dbConfig.js
│   ├── controller/        (lógica de controle e regras de negócio)
│   │   └── postsController.js
│   ├── model/             (definições de modelos de dados)
│   │   └── postsModel.js
│   └── routes/            (definições de rotas)
│       └── postsRoutes.js
├── .env                   (variáveis de ambiente)
├── .gitignore             (arquivos/diretórios ignorados pelo Git)
├── package.json           (metadados e dependências do projeto)
├── package-lock.json      (versões específicas das dependências)
├── README.md              (documentação do projeto)
└── server.js              (arquivo principal para inicializar o servidor)
```

---

## 🌟 Funcionalidades

1. **CRUD de Posts**: Implementação de operações para criar, listar, atualizar e deletar posts.
2. **Conexão com MongoDB**: Configuração para persistência de dados utilizando o banco de dados NoSQL.
3. **Estruturação de Rotas**: Organização modular de rotas utilizando o Express.js.
4. **Gerenciamento de Variáveis de Ambiente**: Uso do `dotenv` para proteger informações sensíveis.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** 16+ instalado
- **MongoDB** configurado e em execução localmente ou via cloud (ex.: MongoDB Atlas)

### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/Carlosaleee/ImersaoAluraBackEnd.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```env
     DB_URI=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/seu_banco
     PORT=8080
     ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

5. Acesse os endpoints da API:
   ```
   http://localhost:8080/api/posts
   ```

---

## 🛠️ Testes

Para validar os endpoints, utilize o Postman ou ferramentas como o Thunder Client. Além disso, você pode criar testes unitários com frameworks como **Jest** (implementação futura).

---

## 🤝 Contribuições

Contribuições são bem-vindas! Para isso:
1. Faça um fork do repositório.
2. Crie um branch para a sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie um pull request com suas alterações.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido  por [**Carlos Alexandre da Silva**](https://linktr.ee/CarlosAleee) durante a Imersão Alura Back-End.  

Confira a [Alura](https://www.alura.com.br/) para mais imersões e cursos incríveis!

--- 
