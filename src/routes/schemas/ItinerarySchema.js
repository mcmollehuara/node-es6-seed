const Joi = require('joi');
const RouteValidator = require('../../middlewares/RouteValidator');

class ItinerarySchema extends RouteValidator {

  static get list() {
    const schema = {
      // params: Joi.object().keys({
      //   departure: Joi.string().required(),
      //   arrival: Joi.string().required()
      // }),
    };

    return this.validate(schema);
  }

  static get departure() {
    const schema = {
      // params: Joi.object().keys({
      //   arrival: Joi.string().required()
      // }),
    };

    return this.validate(schema);
  }

  static get arrival() {
    const schema = {
      // params: Joi.object().keys({
      //   arrival: Joi.string().required()
      // }),
    };

    return this.validate(schema);
  }

}

module.exports = ItinerarySchema;
