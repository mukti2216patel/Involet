const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login' ,(req,res)=>{
    authController.login(req,res);
});

router.post('/register' ,(req,res)=>{
    authController.register(req,res);
});

router.post('/google-login', (req, res) => {
    authController.googleLogin(req, res);
});

module.exports = router;