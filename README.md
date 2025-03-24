# ⚙️ API REST - Cadastro de Imóveis

Esta é uma API REST desenvolvida com **Node.js**, **Express**, **Sequelize** e **PostgreSQL**, responsável por gerenciar o cadastro de imóveis. A aplicação está hospedada no Render e oferece rotas completas para operações CRUD.

---

## 🔗 Acesse a API Online

👉 [https://api-rest-imoveis.onrender.com/api/imoveis](https://api-rest-imoveis.onrender.com/api/imoveis)

> Você pode testar com ferramentas como **Insomnia** ou **Postman**

---

## ✨ Funcionalidades

- ✅ Criação de imóveis
- ✅ Consulta de imóveis
- ✅ Edição e exclusão de imóveis
- ✅ Conexão com banco PostgreSQL no Render
- ✅ Estrutura com Sequelize (ORM)
- ✅ Organização modular (rotas, models, config)

---

## 📡 Rotas disponíveis

| Método | Rota                   | Descrição                    |
|--------|------------------------|------------------------------|
| GET    | /api/imoveis          | Lista todos os imóveis       |
| GET    | /api/imoveis/:id      | Busca um imóvel por ID       |
| POST   | /api/imoveis          | Cria um novo imóvel          |
| PUT    | /api/imoveis/:id      | Atualiza um imóvel existente |
| DELETE | /api/imoveis/:id      | Remove um imóvel             |

---

## 🧠 Tecnologias utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **PostgreSQL**
- **Nodemon** (modo dev)

---

## ⚙️ Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/anagabriellega/api-rest-imoveis.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` com seus dados do banco:
```env
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=seu_banco
DB_HOST=localhost
DB_PORT=5432
```

4. Crie o banco com o mesmo nome e execute:
```bash
npm run dev
```

---

## 📦 Estrutura do Projeto

```
api-rest-imoveis
├── config           # Configuração do Sequelize
├── models           # Modelo dos dados
├── routes           # Rotas da API
├── controllers      # Lógica de controle (CRUD)
├── server.js        # Ponto de entrada do servidor
└── .env             # Variáveis de ambiente
```

---

💚 Feito com dedicação por **Ana Gabrielle**

Se quiser ver o front-end separado dessa aplicação, acesse:  
🔗 [Repositório do Front](https://github.com/anagabriellega/front-imoveis)