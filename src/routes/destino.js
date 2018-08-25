const express = require('express');
const DestinoController = require('../controllers/DestinoController');
const DestinoSchema = require('../routes/schemas/DestinoSchema');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', DestinoSchema.list, DestinoController.list);

/* GET /user/:userId */
router.get('/:id', DestinoSchema.get, DestinoController.get);

/* POST /user */
router.post('/', DestinoSchema.post, DestinoController.post);

/* PUT /user/:userId */
router.put('/:id', DestinoSchema.put, DestinoController.put);

/* DELETE /user/:userId */
router.delete('/:id', DestinoSchema.delete, DestinoController.delete);

module.exports = router;
