const express = require('express'); 
const router = express.Router();
const categoryControllerObject = require('../controllers/categoryController');  
const middleware = require('../middleware/middleware');

router.post('/create-category',[middleware.JWTAuthData], categoryControllerObject.createCategory);
router.get('/create-list',[middleware.JWTAuthData], categoryControllerObject.listCategory);
router.delete('/delete-category',[middleware.JWTAuthData], categoryControllerObject.deleteCategory);
router.put('/update-category', [middleware.JWTAuthData],categoryControllerObject.updateCategory);


module.exports = router;