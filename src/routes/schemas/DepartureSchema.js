const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class DepartureSchema extends RouteValidator {

  static get get() {
    const schema = {
      params: Joi.object().keys({
        id: Joi.number().integer().required(),
      }),
    };

    return this.validate(schema);
  }

  static get list() {
    const schema = {};

    return this.validate(schema);
  }

  static get post() {
    const schema = {
      body: Joi.object().keys({
        nombre: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get put() {
    const schema = {
      params: Joi.object().keys({
        id: Joi.number().integer().required(),
      }),
      body: Joi.object().keys({
        nombre: Joi.string().required(),
      }),
    };

    return this.validate(schema);
  }

  static get delete() {
    const schema = {
      params: Joi.object().keys({
        id: Joi.number().integer().required(),
      }),
    };

    return this.validate(schema);
  }

}

module.exports = DepartureSchema;
