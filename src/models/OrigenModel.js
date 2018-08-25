const { knex } = require('../config/db.pg');
const origenType = require('../types/origen');

class OrigenModel {

  static list() {
    return knex
    .from('pasajes.origen')
    .whereNot('pasajes.origen.condicion', origenType.INACTIVO);
  }

  static get(id) {
    return knex
    .first('id, nombre')
    .from('pasajes.origen')
    .where('pasajes.origen.id', id)
    .whereNot('pasajes.origen.condicion', origenType.INACTIVO);
  }

  static post(data) {
    return knex
    .from('pasajes.origen')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('pasajes.origen');

    if (data.nombre) {
      query.update('nombre', data.nombre);
    }

    query.where('pasajes.origen.id', id)
    .whereNot('pasajes.origen.condicion', origenType.INACTIVO);

    return query;
  }

  static delete(id) {
    return knex
    .from('pasajes.origen')
    .where('pasajes.origen.id', id)
    .whereNot('pasajes.origen.condicion', origenType.INACTIVO)
    .update({
      condicion: origenType.INACTIVO
    });
  }

}

module.exports = OrigenModel;
