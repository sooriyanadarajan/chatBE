const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Mongodb connection
mongoose.connect(process.env.MONGODB_URL);

// Mongodb connection success
mongoose.connection.on('connected', function() {
    console.log('Mongoose connection is open ');
});


// Mongodb connection error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection has occured ' + err + ' error');
});

// Mongodb connection disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection is disconnected');
});


process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});