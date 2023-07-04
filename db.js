const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://gaganv2001:Gagan@cluster0.kgxsn1g.mongodb.net/webpagescrap?retryWrites=true&w=majority';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo Connection failed');
});

connection.once('open', async () => {
    console.log('Connected');

});

module.exports = mongoose;
