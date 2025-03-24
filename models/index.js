const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Altere se usar outro banco (mysql, oracle)
  }
);

sequelize.authenticate()
  .then(() => console.log('Banco conectado com sucesso!'))
  .catch(err => console.log('Erro ao conectar banco: ', err));

module.exports = sequelize;
