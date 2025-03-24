const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Imovel = sequelize.define('Imovel', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  preco: { type: DataTypes.FLOAT, allowNull: false }
}, {
  timestamps: true
});

module.exports = Imovel;
