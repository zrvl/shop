const {Type, TypeInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const type = await Type.findOne({where:{id}});
    return res.json(type);

  }

  async delete(req, res) {
    const { name } = req.body;
    const type = await Type.findOne({ where: { name } });
    if (type) {
      Type.destroy({ where: { name } });
      return res.json(type);
    } else {
      return res.json({});
    }
  }

  async put(req, res) {
    const { name, newName } = req.body;
    console.log(name, newName);
    const type = await Type.findOne({ where: { name } });
    if (type) {
      await Type.update({ name: newName }, { where: { name } });
      const type = await Type.findOne({ where: { name:newName } });
      res.json(type);

    } else {
      return res.json({});
    }
  }
}

module.exports = new TypeController()
