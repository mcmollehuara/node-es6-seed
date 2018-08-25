const { knex } = require('../config/db.pg');
const DepartureModel = require('../models/DepartureModel');
const { toUnixEpoch } = require('../helpers/Datetime');

class DepartureService {

  static async list() {
    const list = await DepartureModel.list();

    const result = list.map(departure => ({
      id: departure.id,
      name: departure.name,
      condicion: departure.condicion
    }));

    return list;
  }

  static async get(data) {
    let departure = await DepartureModel.get(data);

    if (departure) {
      departure = {
        id: departure.id,
        name: departure.name,
        arrival: departure.arrival
      };
    }

    return departure;
  }

  static post(data) {
    return DepartureModel.post(data);
  }

  static put(id, data) {
    return knex.transaction(async (trx) => {
      const departure = await DepartureModel.get(id)
        .transacting(trx);

      if (departure) {
        await DepartureModel.put(departure.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }

  static delete(data) {
    return knex.transaction(async (trx) => {
      const departure = await DepartureModel.get(userId)
        .transacting(trx);

      if (departure) {
        await DepartureModel.delete(departure.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }
}

module.exports = DepartureService;
