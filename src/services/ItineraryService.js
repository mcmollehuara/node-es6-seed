const { knex } = require('../config/db.pg');
const ItineraryModel = require('../models/ItineraryModel');

class ItineraryService {

  static async list(params) {
    const list = await ItineraryModel.list(params.departure.toUpperCase(), params.arrival.toUpperCase());

    const result = list.map(query => ({
      departure: query.departure,
      arrival: query.arrival
    }));

    return list;
  }

  static async item(params) {
    const item = await ItineraryModel.item(params.id);

    const result = item.map(query => ({
     
    }));

    return item;
  }

  static async departure(params) {
    const list = await ItineraryModel.departure(params.name.toUpperCase());

    const result = list.map(query => ({
      departure: query.departure
    }));

    return list;
  }

  static async arrival(params) {
    const list = await ItineraryModel.arrival(params.name.toUpperCase());

    const result = list.map(query => ({
      arrival: query.arrival
    }));

    return list;
  }
}

module.exports = ItineraryService;
