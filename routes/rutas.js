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

router.get('/reto1', rutas.getReto1);

router.post('/reto1', rutas.postReto1);

router.get('/reto2', rutas.getReto2);

router.post('/reto2', rutas.postReto2);

router.get('/reto3', rutas.getReto3);

router.post('/reto3', rutas.postReto3);

router.get('/reto4', rutas.getReto4);

router.post('/reto4', rutas.postReto4);

router.get('/final', rutas.getFinal);

router.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = router;