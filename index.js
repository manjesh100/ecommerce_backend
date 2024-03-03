const fs= require("fs");
const path = require("path");
const express =require('express');
const app=express();
const port =8000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());   

app.get('/api/user-data',(req, res)=>{
    console.log("User data returned  1");
    res.send("Data for user: ")

});


app.get('/api/noida',(req, res)=>{
    console.log("User data returned");
    res.send("noidanoidanoida ")

});




     
//const authRouteURL = require('./src/routes/user-routes');
//app.use('/api/auth', authRouteURL);

// const categoryUrl = require('./src/routes/category-routes');
// app.use('/api/category', categoryUrl);

// const productRoutesUrl = require('./src/routes/product-routes');
// app.use('/api/product', productRoutesUrl);


// const cartRoutesUrl = require('./src/routes/cart-routes');
// app.use('/api/cart', cartRoutesUrl);




app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})