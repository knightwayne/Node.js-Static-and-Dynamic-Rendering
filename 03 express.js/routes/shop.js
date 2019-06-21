const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/' , (req, res, next)=>{
    console.log("First(Shop) Page - Express Middleware!");
    //res.send("<h1>HTML Page using Express.js</h1>");
    res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));
});

module.exports = {
    router : router
}