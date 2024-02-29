const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/ecomm_portal';
// { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })