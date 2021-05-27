const express = require('express');
const router = express.Router();

const {getAllCountries, getCountryById} = require('../controller/countryController');

router.get('/', getAllCountries);
router.get('/:id', getCountryById);
module.exports = router;

