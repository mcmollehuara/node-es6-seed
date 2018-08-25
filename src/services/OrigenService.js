const { knex } = require('../config/db.pg');
const OrigenModel = require('../models/OrigenModel');
const { toUnixEpoch } = require('../helpers/Datetime');

class OrigenService {

  static async list() {
    const list = await OrigenModel.list();

    const result = list.map(origen => ({
      id: origen.id,
      name: origen.name,
      condicion: origen.condicion
    }));

    return list;
  }

  static async get(data) {
    let origen = await OrigenModel.get(data);

    if (origen) {
      origen = {
        id: origen.id,
        name: origen.name,
        destino: origen.destino
      };
    }

    return origen;
  }

  static post(data) {
    return OrigenModel.post(data);
  }

  static put(id, data) {
    return knex.transaction(async (trx) => {
      const origen = await OrigenModel.get(id)
        .transacting(trx);

      if (origen) {
        await OrigenModel.put(origen.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }

  static delete(data) {
    return knex.transaction(async (trx) => {
      const origen = await OrigenModel.get(userId)
        .transacting(trx);

      if (origen) {
        await OrigenModel.delete(origen.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }
}

module.exports = OrigenService;
