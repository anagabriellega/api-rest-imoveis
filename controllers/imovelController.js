const Imovel = require('../models/imovel');

exports.create = async (req, res) => {
  try {
    const imovel = await Imovel.create(req.body);
    res.status(201).json(imovel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const imoveis = await Imovel.findAll();
    res.json(imoveis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const imovel = await Imovel.findByPk(req.params.id);
    if (!imovel) return res.status(404).json({ error: 'Imóvel não encontrado' });
    res.json(imovel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const imovel = await Imovel.findByPk(req.params.id);
    if (!imovel) return res.status(404).json({ error: 'Imóvel não encontrado' });

    await imovel.update(req.body);
    res.json(imovel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const imovel = await Imovel.findByPk(req.params.id);
    if (!imovel) return res.status(404).json({ error: 'Imóvel não encontrado' });

    await imovel.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
