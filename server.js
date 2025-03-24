const express = require('express');
const cors = require('cors');
const sequelize = require('./models');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const imovelRoutes = require('./routes/imovelRoutes');
app.use('/api', imovelRoutes);


const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
