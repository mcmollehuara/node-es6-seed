const { knex } = require('../config/db.pg');
const departureType = require('../types/departure');

class DepartureModel {

  static list() {
    return knex
    .from('pasajes.departure_vw')
    .whereNot('pasajes.departure_vw.status', departureType.INACTIVE);
  }

  static get(id) {
    return knex
    .first('id, departure')
    .from('pasajes.departure_vw')
    .where('pasajes.departure_vw.id', id)
    .whereNot('pasajes.departure_vw.status', departureType.INACTIVE);
  }

  static post(data) {
    return knex
    .from('pasajes.departure_vw')
    .insert(data);
  }

  static put(id, data) {
    const query = knex
    .from('pasajes.departure_vw');

    if (data.departure) {
      query.update('departure', data.departure);
    }

    query.where('pasajes.departure_vw.id', id)
    .whereNot('pasajes.departure_vw.status', departureType.INACTIVE);

    return query;
  }

  static delete(id) {
    return knex
    .from('pasajes.departure_vw')
    .where('pasajes.departure_vw.id', id)
    .whereNot('pasajes.departure_vw.status', departureType.INACTIVE)
    .update({
      status: departureType.INACTIVE
    });
  }

}

module.exports = DepartureModel;
