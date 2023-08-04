const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// || 'mongodb://127.0.0.1:27017/googlebooks',

module.exports = mongoose.connection;
