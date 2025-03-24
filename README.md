# API REST - Cadastro de Imóveis

## Tecnologias
- Node.js
- Express
- Sequelize ORM
- PostgreSQL

## Funcionalidades
- Cadastro de imóveis (CRUD completo)

## Como Rodar
- Clone o projeto
- Execute `npm install`
- Configure o `.env`
- Execute `npm run dev`

## Rotas
| Método | Rota          | Descrição                 |
|--------|---------------|---------------------------|
| POST   | /api/imoveis  | Cria novo imóvel          |
| GET    | /api/imoveis  | Lista todos imóveis       |
| GET    | /api/imoveis/:id | Busca imóvel específico |
| PUT    | /api/imoveis/:id | Atualiza imóvel         |
| DELETE | /api/imoveis/:id | Exclui imóvel           |
