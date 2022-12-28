
const mongoose = require('mongoose');
const asyncHandler = require('./middleware/asyncHandler');

module.exports = asyncHandler(async () => {
    mongoose.set('strictQuery', false);
    
    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
        // useFindAndModify: false
    };

    const connection = await mongoose.connect(process.env.DB, connectionParams);
    connection ?
        console.log("Connected to Database")
        : console.log("Could not Connected to Database")
})