const Logger = require('../helpers/Logger');
const DestinoService = require('../services/DestinoService');

class DestinoController {

  static async list(req, res) {
    try {
      const rows = await DestinoService.list();

      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '3272358416', err);
    }
  }

  static async get(req, res) {
    try {
      const destino = await DestinoService.get(req.params);

      if (destino === null) {
        res.send({
          success: false,
          code: '7731668134',
          message: req.__('api.destino.notFound'),
        });
        return;
      }

      res.send({ success: true, data: destino });
    } catch (err) {
      Logger.throw(res, '6001059324', err);
    }
  }

  static async post(req, res) {
    const data = {
      nombre: req.body.name.trim(),
    };

    try {
      const [id] = await DestinoService.post(data);
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
      const success = await DestinoService.put(data);

      if (success === false) {
        res.send({
          success: false,
          code: '7502749763',
          message: req.__('api.destino.notFound'),
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
      const success = await DestinoService.delete(data);

      if (success === false) {
        res.send({
          success: false,
          code: '9517673561',
          message: req.__('api.destino.notFound'),
        });
        return;
      }

      res.send({ success: true });
    } catch (err) {
      Logger.throw(res, '5768005470', err);
    }
  }
}

module.exports = DestinoController;
