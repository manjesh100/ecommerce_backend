const express = require('express');
const router = express.Router();
//const middleware = require('../middleware/middleware');
const cartController = require('../controllers/cartController');

router.post('/add-cart', cartController.addCart); 
router.post('/cart-list', cartController.cartList);
router.delete('/cart-list-delete', cartController.cartListDelete);
 router.post('/count-cart', cartController.cartCount);

 //router.post('/count-update',[middleware.JWTAuthData,middleware.JWTAuthData, cartController.countUpdate]);
 

module.exports = router;


