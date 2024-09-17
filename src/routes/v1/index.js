// handlling all the v1 apis here
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const express = require('express');

const router = express.Router();

router.post('/city',CityController.createCity)
router.delete('/city/:id',CityController.deleteCity);
router.get('/city/:id',CityController.getCity);
router.patch('/city/:id',CityController.updateCity);
router.get('/city',CityController.getAllCities);

router.post('/flights', FlightController.createFlight);
router.get('/flights',FlightController.getAllFlights);

module.exports = router;