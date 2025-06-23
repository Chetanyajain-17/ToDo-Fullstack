const express = require('express');
const router = express.Router(); //this will allow to create router methods which is provided by express
const AuthController = require('../controllers/AuthController');

router.post('/register',AuthController.registerUser);
router.post('/login', AuthController.loginUser);

router.get('/test', (req, res) => {
  res.send('✅ Test route is working');
});

module.exports = router;