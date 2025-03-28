const express = require('express');
const router = express.Router();
const { signup, login, getUserDetails } = require('../controllers/CustomerController.js');
const authMiddleware = require('../middleware/middleware.js');


router.post('/signup', signup);  
router.post('/login', login);    
router.get('/user', authMiddleware, getUserDetails);  

module.exports = router;
