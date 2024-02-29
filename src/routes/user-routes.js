const express = require('express'); 
const authControllerObject = require('../controllers/authController');  
const router = express.Router();

router.post('/create-user', authControllerObject.sinupUser);
router.post("/login-user" ,authControllerObject.loginUser)
 


module.exports = router;