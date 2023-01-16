const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const brand = await Brand.findOne({ where: { id } });
    return res.json(brand);
  }

  async delete(req, res) {
    const { name } = req.body;
    const brand = await Brand.findOne({ where: { name } });
    if (brand) {
      Brand.destroy({ where: { name } });
      return res.json(brand);
    } else {
      return res.json({});
    }
  }

  async put(req, res) {
    const {name, newName} = req.body;
    const brand = await Brand.findOne({ where: { name } });
    if (brand) {
      await Brand.update({name: newName}, { where: {name} });
      const brand = await Brand.findOne({ where: {name: newName} });
      res.json(brand);
    } else {
      return res.json({});
    }
  }
}

module.exports = new BrandController()
