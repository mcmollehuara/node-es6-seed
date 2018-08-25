const express = require('express');
const OrigenController = require('../controllers/OrigenController');
const OrigenSchema = require('../routes/schemas/UserSchema');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', OrigenSchema.list, OrigenController.list);

/* GET /user/:userId */
router.get('/:userId', OrigenSchema.get, OrigenController.get);

/* POST /user */
router.post('/', OrigenSchema.post, OrigenController.post);

/* PUT /user/:userId */
router.put('/:userId', OrigenSchema.put, OrigenController.put);

/* DELETE /user/:userId */
router.delete('/:userId', OrigenSchema.delete, OrigenController.delete);

module.exports = router;
