const path = require("path");

const express = require('express');

const router = express.Router();

//GET  /admin/add-product
router.get('/add-product' , (req, res, next)=>{
    console.log(path.join(__dirname), "admin.js");
    console.log('Add-product middleware!');
    //res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
    res.sendFile(path.join(__dirname, '../' , 'views' , 'add-product.html'))
});

//POST  /admin/add-product
router.post('/add-product' , (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
    //res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));
});

module.exports = {
    router : router
}