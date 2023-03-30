const express = require('express');
const router = express.Router();

const controller = require('../controllers/UserController');

router.get('/',(req, res)=>{
    res.send("User: Talib");
});

module.exports=router;