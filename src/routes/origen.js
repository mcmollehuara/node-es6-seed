const express = require('express');
const OrigenController = require('../controllers/OrigenController');
const OrigenSchema = require('../routes/schemas/UserSchema');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', OrigenSchema.list, OrigenController.list);

/* GET /user/:userId */
router.get('/:id', OrigenSchema.get, OrigenController.get);

/* POST /user */
router.post('/', OrigenSchema.post, OrigenController.post);

/* PUT /user/:userId */
router.put('/:id', OrigenSchema.put, OrigenController.put);

/* DELETE /user/:userId */
router.delete('/:id', OrigenSchema.delete, OrigenController.delete);

module.exports = router;
