const { where } = require("sequelize");
const { Logger } = require("../config");
const { StatusCodes } = require("http-status-codes");
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }
  async delete(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if (!response) {
      throw new appError(
        "The searched airplane is not found",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
  async get(data) {
    const response = await this.model.findByPk(data);
    if (!response) {
      throw new appError(
        "The searched object is not found",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
  async getAll(data) {
    const response = await this.model.findAll(data);
    return response;
  }
  async update(id, data) {
    const [rowsUpdated] = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    if (rowsUpdated === 0) {
      throw new appError(
        "The searched object is not found",
        StatusCodes.NOT_FOUND
      );
    }
    const updated = await this.model.findByPk(id);
    console.log("updated record =", updated);
  }
}

module.exports = CrudRepository;
