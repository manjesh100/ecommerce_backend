const fs= require("fs");
const path = require("path");
const express =require('express');
const app=express();
const port =3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());   


     
const authRouteURL = require('./src/routes/user-routes');
app.use('/auth', authRouteURL);

const categoryUrl = require('./src/routes/category-routes');
app.use('/category', categoryUrl);
const productRoutesUrl = require('./src/routes/product-routes');
app.use('/product', productRoutesUrl);


const cartRoutesUrl = require('./src/routes/cart-routes');
app.use('/cart', cartRoutesUrl);



app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})