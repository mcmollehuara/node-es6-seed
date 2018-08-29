const Logger = require('../helpers/Logger');
const ItineraryService = require('../services/ItineraryService');

class ItineraryController {

  static async list(req, res) {
    try {
      const rows = await ItineraryService.list(req.params);

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '327235841600', err);
    }
  }

  static async item(req, res) {
    try {
      const rows = await ItineraryService.item(req.params);

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '327235841600', err);
    }
  }

  static async departure(req, res) {
    try {
      const rows = await ItineraryService.departure(req.params);

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '327235841601', err);
    }
  }

  static async arrival(req, res) {
    try {
      const rows = await ItineraryService.arrival(req.params);

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '327235841602', err);
    }
  }

}

module.exports = ItineraryController;
