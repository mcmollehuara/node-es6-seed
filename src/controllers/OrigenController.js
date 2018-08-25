const Logger = require('../helpers/Logger');
const OrigenService = require('../services/OrigenService');

class OrigenController {

  static async list(req, res) {
    try {
      const rows = await OrigenService.list();

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '3272358416', err);
    }
  }

  static async get(req, res) {
    try {
      const origen = await OrigenService.get(req.params);

      if (origen === null) {
        res.send({
          success: false,
          code: '7731668134',
          message: req.__('api.origen.notFound'),
        });
        return;
      }

      res.send({ success: true, data: origen });
    } catch (err) {
      Logger.throw(res, '6001059324', err);
    }
  }

  static async post(req, res) {
    const data = {
      nombre: req.body.nombre.trim(),
    };

    try {
      const [id] = await OrigenService.post(data);
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
      const success = await OrigenService.put(data);

      if (success === false) {
        res.send({
          success: false,
          code: '7502749763',
          message: req.__('api.origen.notFound'),
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
      const success = await OrigenService.delete(data);

      if (success === false) {
        res.send({
          success: false,
          code: '9517673561',
          message: req.__('api.origen.notFound'),
        });
        return;
      }

      res.send({ success: true });
    } catch (err) {
      Logger.throw(res, '5768005470', err);
    }
  }
}

module.exports = OrigenController;
