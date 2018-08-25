const { knex } = require('../config/db.pg');
const DestinoModel = require('../models/DestinoModel');

class DestinoService {

  static async list() {
    const list = await DestinoModel.list();

    const result = list.map(destino => ({
      id: destino.id,
      name: destino.name,
      condicion: destino.condicion
    }));

    return list;
  }

  static async get(data) {
    let destino = await DestinoModel.get(data);

    if (destino) {
      destino = {
        id: destino.id,
        name: destino.name,
        status: destino.status
      };
    }

    return destino;
  }

  static post(data) {
    return DestinoModel.post(data);
  }

  static put(id, data) {
    return knex.transaction(async (trx) => {
      const destino = await DestinoModel.get(id)
        .transacting(trx);

      if (destino) {
        await DestinoModel.put(destino.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }

  static delete(data) {
    return knex.transaction(async (trx) => {
      const destino = await DestinoModel.get(id)
        .transacting(trx);

      if (destino) {
        await DestinoModel.delete(destino.id, data)
          .transacting(trx);

        return true;
      }

      return false;
    });
  }
}

module.exports = DestinoService;
