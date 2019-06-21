const path = require('path');

const express = require('express');

const adminRoute = require('./admin');

//express router
const router = express.Router();

// /{nothing}=>GET
router.get('/' , (req, res, next)=>{
    console.log("Shop Page Middleware!", adminRoute.product);
    //res.sendFile(path.join(__dirname, '../' , 'views', 'shop.html'));
    const product=adminRoute.product;
    res.render('shop', {prod: product, docTitle: 'Shop Page', path: '/', hasProducts: product.length>0, productCSS: true/*, layout: false*/});
});

module.exports = {
    router : router
}