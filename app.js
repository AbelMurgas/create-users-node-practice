const path = require('path');
const express = require('express')

const routesHome = require('./routes/home')
const routesUsers = require('./routes/users')

const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routesHome.routes);
app.use(routesUsers);

app.use((req, res, next) =>{
    res.status(404).render('404', { pageTitle: 'Error no found' });
})

app.listen(3000);