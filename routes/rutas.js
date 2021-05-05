const express = require('express');
const router = express.Router();
// const isAuth = require('../util/isAuth');
const path = require('path');

// Aqui van las rutas...
const rutas = require('../controller/controller');

// router.get, para todas

// get login
// post login
// tal vez incluir en el script la validaci[on de contrasenas pero no me late] 
// get reto1
// post reto1
// get reto2
// post reto2
// get/post ... reto final
// get felicidades....

router.get('/login', rutas.getLogin);

router.post('/login', rutas.postLogin);

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;