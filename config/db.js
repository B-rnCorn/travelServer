require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MONGODB CONNECTION SUCCESS")
    } catch (error) {
        console.log("MONGODB CONNECTION FAIL");
        process.exit(1)
    }
};

module.exports = connectDB;