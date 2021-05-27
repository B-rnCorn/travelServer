const Mongoose = require("mongoose");

const countrySchema = new Mongoose.Schema({
    countryName: {
        type: String,
        required: true
    },
    countryPhoto: {
        type: String,
        required: true
    },
    countryDescription: {
        type: String,
        required: true
    },
    countryInformation: {
        type: String,
        required: true
    },
    bigPhoto: {
        type: String,
        required: true
    }
});
const Country = Mongoose.model("country", countrySchema);
module.exports = Country;