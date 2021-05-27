require('dotenv').config();

const countriesData = require("./data/countries");
const connectDB = require("./config/db");
const Country = require("./models/Country");

connectDB();

const importData = async () => {
    try {
        await Country.deleteMany({});
        await Country.insertMany(countriesData);
        console.log("Data Import Success");
        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};
importData();