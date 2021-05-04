// Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Rutas para acceder a la carpeta de rutas
const rutas = require('./routes/rutas');

// Body-Parser
app.use(bodyParser.urlencoded({extended: false}));

// Acceder a archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas a utilizar
app.use('/agentes', rutas);
app.use((request, response, next) => {
    response.status(400);
    response.render('404', {
        titulo: '404 - Page Not Found'
    });
})

app.listen(3000);