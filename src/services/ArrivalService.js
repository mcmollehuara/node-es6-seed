const { knex } = require('../config/db.pg');
const ArrivalModel = require('../models/ArrivalModel');

class ArrivalService {

  static async list() {
    const list = await ArrivalModel.list();

    const result = list.map(arrival => ({
      id: arrival.id,
      name: arrival.name,
      condicion: arrival.condicion
    }));

    return list;
  }

  static async get(data) {
    let arrival = await ArrivalModel.get(data);

    if (arrival) {
      arrival = {
        id: arrival.id,
        name: arrival.name,
        status: arrival.status
      };
    }

    return arrival;
  }

  static post(data) {
    return ArrivalModel.post(data);
  }

  static put(id, data) {
    return knex.transaction(async (trx) => {
      const arrival = await ArrivalModel.get(id)
        .transacting(trx);

      if (arrival) {
        await ArrivalModel.put(arrival.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }

  static delete(data) {
    return knex.transaction(async (trx) => {
      const arrival = await ArrivalModel.get(id)
        .transacting(trx);

      if (arrival) {
        await ArrivalModel.delete(arrival.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }
}

module.exports = ArrivalService;
