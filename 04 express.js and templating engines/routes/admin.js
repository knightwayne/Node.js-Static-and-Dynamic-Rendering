const path = require("path");

const express = require('express');

//express router
const router = express.Router();

const products = [];

//  /admin/add-product=>GET
router.get('/add-product' , (req, res, next)=>{
    console.log('Add-Product Middleware!');
    //res.sendFile(path.join(__dirname, '../' , 'views' , 'add-product.html'))
    res.render('add-product', {docTitle: 'Add Product Page', path: '/admin/add-product', formsCSS: true, productCSS: true/*, layout: false*/})
});

//  /admin/add-product=>POST
router.post('/add-product' , (req, res, next)=>{
    console.log("Product Added Middleware!", req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports = {
    router : router,
    product: products
}