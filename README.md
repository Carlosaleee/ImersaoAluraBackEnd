# Imersão  Alura Back-End - Google Gemini  🚀

Este repositório contém os projetos e atividades desenvolvidos durante a **Imersão Alura Back-End**, promovida pela Alura. O objetivo principal foi <br>
aprofundar conhecimentos em desenvolvimento back-end, com foco em boas práticas, estruturação de APIs e integração com bancos de dados.

---

## 📋 Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para desenvolvimento back-end.
- **Spring Boot**: Framework para construção de APIs REST.
- **MongoDB**: Banco de dados não-relacional.
- **Hibernate**: ORM (Object-Relational Mapping) para simplificar a manipulação do banco de dados.
- **Postman**: Ferramenta para teste de APIs.
- - **NodeJs**: Ferramenta para teste de APIs.

---

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma:

```
ImersaoAluraBackEnd/
├── src/
│   ├── main/
│   │   ├── java/ (código fonte)
│   │   └── resources/ (configurações e templates)
│   └── test/ (testes unitários)
├── .gitignore
├── README.md
└── pom.xml (configurações do Maven)
```

---

## 🌟 Funcionalidades

1. **Criação de Endpoints**: Desenvolvimento de rotas para CRUD de entidades.
2. **Validação de Dados**: Implementação de validações utilizando Bean Validation.
3. **Conexão com Banco de Dados**: Configuração e persistência de dados no MySQL.
4. **Testes de API**: Utilização do Postman para simular requisições HTTP.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **JDK** 17 ou superior
- **Maven** instalado
- **Mongo** configurado e em execução

### Passos para Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/Carlosaleee/ImersaoAluraBackEnd.git
   ```

2. Configure o arquivo `application.properties`:
   - Localizado em `src/main/resources/application.properties`.
   - Atualize as credenciais do banco de dados:

     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/sua_base_de_dados
     spring.datasource.username=seu_usuario
     spring.datasource.password=sua_senha
     ```

3. Compile e execute o projeto:
   ```bash
   mvn spring-boot:run
   ```

4. Acesse a API em:
   ```
   http://localhost:8080
   ```

---

## 🛠️ Testes

Para executar os testes unitários:
```bash
mvn test
```

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido com 💙 por <b>Carlos Alexandre da Silva</b> durante a Imersão Alura Back-End.
```

