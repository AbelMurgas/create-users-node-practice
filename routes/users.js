const express = require('express');

const router = express.Router();

const usersData = require('./home');

router.get('/users', (req, res, next) => {
    console.log(usersData.products)
    res.render('users-display', { pageTitle: "Users", users: usersData})
})

module.exports = router