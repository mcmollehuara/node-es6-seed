const Logger = require('../helpers/Logger');
const ArrivalService = require('../services/ArrivalService');

class ArrivalController {

  static async list(req, res) {
    try {
      const rows = await ArrivalService.list();

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '3272358416', err);
    }
  }

  static async get(req, res) {
    try {
      const arrival = await ArrivalService.get(req.params);

      if (arrival === null) {
        res.send({
          success: false,
          code: '7731668134',
          message: req.__('api.arrival.notFound'),
        });
        return;
      }

      res.send({ success: true, data: arrival });
    } catch (err) {
      Logger.throw(res, '6001059324', err);
    }
  }

  static async post(req, res) {
    const data = {
      nombre: req.body.name.trim(),
    };

    try {
      const [id] = await ArrivalService.post(data);
      res.send({ success: true, data: { id } });

    } catch (err) {
      Logger.throw(res, '2365958507', err);
    }
  }

  static async put(req, res) {
    const data = {
      id: req.params.id,
      nombre: req.body.nombre.trim(),
    };

    try {
      const success = await ArrivalService.put(data);

      if (success === false) {
        res.send({
          success: false,
          code: '7502749763',
          message: req.__('api.arrival.notFound'),
        });
        return;
      }

      res.send({ success: true });
    } catch (err) {
      Logger.throw(res, '5768905470', err);
    }
  }

  static async delete(req, res) {
    const data = {
      id: req.params,
    };

    try {
      const success = await ArrivalService.delete(data);

      if (success === false) {
        res.send({
          success: false,
          code: '9517673561',
          message: req.__('api.arrival.notFound'),
        });
        return;
      }

      res.send({ success: true });
    } catch (err) {
      Logger.throw(res, '5768005470', err);
    }
  }
}

module.exports = ArrivalController;
