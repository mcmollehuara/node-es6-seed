    const express = require('express');
const ItineraryController = require('../controllers/ItineraryController');
const ArrivalSchema = require('../routes/schemas/ItinerarySchema');

const router = express.Router({ mergeParams: true });

/* GET /list */
router.get('/list/:arrival/:departure', ArrivalSchema.list, ItineraryController.list);
router.get('/list/:arrival', ArrivalSchema.list, ItineraryController.arrival);
router.get('/item/:id', ArrivalSchema.item, ItineraryController.item);

// //
// router.get('/arrival/:name', ArrivalSchema.arrival, ItineraryController.arrival);
// router.get('/departure/:name', ArrivalSchema.departure, ItineraryController.departure);


module.exports = router;
