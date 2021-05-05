// Aqui iran todos los gets, posts

const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('index');
};

exports.postLogin = (request, response, next) => {
    let user = request.body.username; 
    let password = request.body.password;

    if(user === "3251" && password === "hola") {
        console.log('Siu');
        request.session.acceso = 1;
        console.log(request.session.acceso);
    }
    else {
        console.log('Intruso detectado');
        response.redirect('/agentes/login');
    }
}

exports.getReto1 = (request, response, next) => {
    response.render('reto1');
};

exports.postReto1 = (request, response, next) => {
    response.render('reto1');
};

