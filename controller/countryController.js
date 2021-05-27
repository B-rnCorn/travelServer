const Country = require('../models/Country');

const getAllCountries = async (req, res) => {
    try {
        const countries = await Country.find({});
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});

    }
}
const getCountryById = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id);
        res.json(country)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllCountries,
    getCountryById,
}