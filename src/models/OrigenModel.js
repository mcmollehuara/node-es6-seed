const { knex } = require('../config/db.pg');
const origenType = require('../types/origen');

class OrigenModel {

  static list() {
    return knex
    .from('origen')
    .whereNot('origen.condicion', origenType.ACTIVO);
  }

  static get(id) {
    return knex
    .first('id, nombre')
    .from('origen')
    .where('origen.id', id)
    .whereNot('origen.condicion', origenType.ACTIVO);
  }

  static post(data) {
    return knex
    .from('origen')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('origen');

    if (data.nombre) {
      query.update('nombre', data.nombre);
    }

    query.where('origen.id', id)
    .whereNot('origen.condicion', origenType.DELETED);

    return query;
  }

  static delete(id) {
    return knex
    .from('origen')
    .where('origen.id', id)
    .whereNot('origen.condicion', origenType.INACTIVE)
    .update({
      status: origenType.INACTIVE
    });
  }

}

module.exports = OrigenModel;
