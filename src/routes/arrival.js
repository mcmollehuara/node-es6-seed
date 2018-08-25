const express = require('express');
const ArrivalController = require('../controllers/ArrivalController');
const ArrivalSchema = require('../routes/schemas/ArrivalSchema');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', ArrivalSchema.list, ArrivalController.list);

/* GET /user/:userId */
router.get('/:id', ArrivalSchema.get, ArrivalController.get);

/* POST /user */
router.post('/', ArrivalSchema.post, ArrivalController.post);

/* PUT /user/:userId */
router.put('/:id', ArrivalSchema.put, ArrivalController.put);

/* DELETE /user/:userId */
router.delete('/:id', ArrivalSchema.delete, ArrivalController.delete);

module.exports = router;
