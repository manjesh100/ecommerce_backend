const mongoose = require('mongoose');
const password = 'abhi@9266'; // Replace with your actual password
const encodedPassword = encodeURIComponent(password);
//const dbURI = `mongodb+srv://manjeshphp:${encodedPassword}@cluster0.z6bxu7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const dbURI =`mongodb+srv://manjeshphp:${encodedPassword}@ecommerce.haoxoa7.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce`;
//IT DATA 
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB ALL OVER RUNING');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  })