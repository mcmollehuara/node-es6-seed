    const express = require('express');
const ItineraryController = require('../controllers/ItineraryController');
const ArrivalSchema = require('../routes/schemas/ItinerarySchema');

const router = express.Router({ mergeParams: true });

/* GET /list */
router.get('/list/:departure/:arrival', ArrivalSchema.list, ItineraryController.list);
router.get('/item/:id', ArrivalSchema.item, ItineraryController.item);

/* GET /list */
router.get('/departure/:name', ArrivalSchema.departure, ItineraryController.departure);
router.get('/arrival/:name', ArrivalSchema.arrival, ItineraryController.arrival);

module.exports = router;
