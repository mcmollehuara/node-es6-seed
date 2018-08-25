const { knex } = require('../config/db.pg');
const arrivalType = require('../types/arrival');

class ArrivalModel {

  static list() {
    return knex
    .from('pasajes.arrival_vw')
    .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  }

  static get(id) {
    return knex
    .first('id, arrival')
    .from('pasajes.arrival_vw')
    .where('pasajes.arrival_vw.id', id)
    .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  }

  static post(data) {
    return knex
    .from('pasajes.arrival_vw')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('pasajes.arrival_vw');

    if (data.arrival) {
      query.update('arrival', data.arrival);
    }

    query.where('arrival_vw.id', id)
    .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);

    return query;
  }

  static delete(id) {
    return knex
    .from('pasajes.arrival_vw')
    .where('pasajes.arrival_vw.id', id)
    .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE)
    .update({
      condicion: arrivalType.INACTIVE
    });
  }

}

module.exports = ArrivalModel;
