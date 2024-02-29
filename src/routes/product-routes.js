const express =require('express');
const router = express.Router();
 
const productcontroller = require('../controllers/productcontroller');  
 
const path = require("path");
const multer = require('multer');
const upload = multer({dest: path.normalize(__dirname + "../../../public/productImage/")})
//middleware.JWTAuthData,middleware.userAuth,  
 
router.post('/add-product',[upload.single("picure")], productcontroller.saveProduct); 
router.post('/product-list-categorie',productcontroller.productList); 
router.get('/all-product-list',productcontroller.allProductList);
router.delete('/delete-product', productcontroller.productDelete);

module.exports = router;