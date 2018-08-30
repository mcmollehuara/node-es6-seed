const { knex } = require('../config/db.pg');
// const itineraryType = require('../types/itinerary');

class ItineraryModel {
  
  static list(arrival, departure) {
    let text = `${departure}-${arrival}`
    return knex
    .from('pasajes.itinerary_vw')
    .where('name', 'like', `${text}%`)
    // .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  }

  static  arrival(name) {
    let text = `${name}`
    return knex
    .from('pasajes.itinerary_vw')
    .where('name', 'like', `%-${text}%`)
    // .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  }


  static item(id) {
    let query = `${id}`
    return knex
    .from('pasajes.itinerary_vw')
    .where('id', `${query}`)
    // .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  }

  // static departure(name) {
  //   let text = `${name}`
  //   return knex
  //   .from('pasajes.itinerary_vw')
  //   .where('name', 'like', `${text}-%`)
  //   // .whereNot('pasajes.arrival_vw.status', arrivalType.INACTIVE);
  // }
}

module.exports = ItineraryModel;
