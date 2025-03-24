const express = require('express');
const router = express.Router();
const ImovelController = require('../controllers/imovelController');

// Rotas CRUD
router.post('/imoveis', ImovelController.create);
router.get('/imoveis', ImovelController.getAll);
router.get('/imoveis/:id', ImovelController.getOne);
router.put('/imoveis/:id', ImovelController.update);
router.delete('/imoveis/:id', ImovelController.delete);

module.exports = router;
