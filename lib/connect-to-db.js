const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = async (dbOptions = {}) => {
    const {
        host = 'localhost',
        port = '27017',
        database = 'task',
    } = dbOptions;

    const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    };

    const uri = `mongodb://${host}:${port}/${database}`;

    try {
        await mongoose.connect(uri, options);
        console.log('Connected to database');
    } catch (err) {
        console.error('Database connection failed: ', String(err));
    }
};