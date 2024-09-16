// handlling all the v1 apis here
const CityController = require('../../controllers/city-controller')
const express = require('express');

const router = express.Router();

router.post('/city',CityController.createCity)

module.exports = router;