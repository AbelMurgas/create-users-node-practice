const express = require('express');

const router = express.Router();

const products = [];

router.get('/', (req, res, next) => {
    res.render('create-user', { pageTitle: "Home"})
})

router.post('/', (req, res, next) => {
    products.push({ userName: req.body.userName });
    res.redirect('/users-display');
 });

exports.routes = router
exports.products = products