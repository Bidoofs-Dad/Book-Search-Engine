const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// || 'mongodb://127.0.0.1:27017/googlebooks',

module.exports = mongoose.connection;
