const { knex } = require('../config/db.pg');
const destinoType = require('../types/destino');

class DestinoModel {

  static list() {
    return knex
    .from('destino')
    .whereNot('destino.condicion', destinoType.ACTIVO);
  }

  static get(id) {
    return knex
    .first('id, nombre')
    .from('destino')
    .where('destino.id', id)
    .whereNot('destino.condicion', destinoType.ACTIVO);
  }

  static post(data) {
    return knex
    .from('destino')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('destino');

    if (data.nombre) {
      query.update('nombre', data.nombre);
    }

    query.where('destino.id', id)
    .whereNot('destino.condicion', destinoType.DELETED);

    return query;
  }

  static delete(id) {
    return knex
    .from('destino')
    .where('destino.id', id)
    .whereNot('destino.condicion', destinoType.INACTIVE)
    .update({
      status: destinoType.INACTIVE
    });
  }

}

module.exports = DestinoModel;
