const { knex } = require('../config/db.pg');
const destinoType = require('../types/destino');

class DestinoModel {

  static list() {
    return knex
    .from('pasajes.destino')
    .whereNot('pasajes.destino.condicion', destinoType.INACTIVO);
  }

  static get(id) {
    return knex
    .first('id, nombre')
    .from('pasajes.destino')
    .where('pasajes.destino.id', id)
    .whereNot('pasajes.destino.condicion', destinoType.INACTIVO);
  }

  static post(data) {
    return knex
    .from('pasajes.destino')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('pasajes.destino');

    if (data.nombre) {
      query.update('nombre', data.nombre);
    }

    query.where('destino.id', id)
    .whereNot('pasajes.destino.condicion', destinoType.INACTIVO);

    return query;
  }

  static delete(id) {
    return knex
    .from('pasajes.destino')
    .where('pasajes.destino.id', id)
    .whereNot('pasajes.destino.condicion', destinoType.INACTIVO)
    .update({
      condicion: destinoType.INACTIVO
    });
  }

}

module.exports = DestinoModel;
