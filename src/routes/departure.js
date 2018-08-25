const express = require('express');
const DepartureController = require('../controllers/DepartureController');
const DepartureSchema = require('../routes/schemas/UserSchema');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', DepartureSchema.list, DepartureController.list);

/* GET /user/:userId */
router.get('/:id', DepartureSchema.get, DepartureController.get);

/* POST /user */
router.post('/', DepartureSchema.post, DepartureController.post);

/* PUT /user/:userId */
router.put('/:id', DepartureSchema.put, DepartureController.put);

/* DELETE /user/:userId */
router.delete('/:id', DepartureSchema.delete, DepartureController.delete);

module.exports = router;
