// Basic Express Structure
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body-Parser
app.use(bodyParser.urlencoded({extended: false}));

// Acceder a archivos de la carpeta Public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para acceder a la carpeta de rutas
const rutas = require('./routes/rutas');

// Rutas a utilizar
app.use('/agentes', rutas);
app.use((request, response, next) => {
    response.status(404);
    console.log('404');
    response.render('404');
})

app.listen(3000);