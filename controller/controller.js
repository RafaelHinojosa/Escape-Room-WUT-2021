// Aqui iran todos los gets, posts

const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('index');
};

exports.postLogin = (request, response, next) => {
    let accion = request.body.nombreBoton;

    if(accion === 'Siguiente') {
        response.redirect('/agentes/reto1');
    }
    else if(accion === 'Verificar') {
        let user = request.body.user; 
        let password = request.body.password;
        
        if(user === "3251" && password === "hola") {
            request.session.acceso = 1;
            response.status(200).json({veredicto: 'Correcto'});
        }
        else {
            response.status(200).json({veredicto: 'Incorrecto'});
        }
    }
}

exports.getReto1 = (request, response, next) => {
    response.render('reto1');
};

exports.postReto1 = (request, response, next) => {
    response.render('reto1');
};

exports.getReto2 = (request, response, next) => {
    response.render('reto2');
};

exports.postReto2 = (request, response, next) => {
    let accion = request.body.nombreBoton;

    if(accion === 'Siguiente') {
        response.redirect('/agentes/reto3');
    }
    else if(accion === 'Verificar') {
        let ans = request.body.ans; 
        
        if(ans === "070521") {
            request.session.acceso = 3;
            response.status(200).json({veredicto: 'Correcto'});
        }
        else {
            response.status(200).json({veredicto: 'Incorrecto'});
        }
    }
};

exports.getReto3 = (request, response, next) => {
    response.render('reto3');
};

exports.postReto3 = (request, response, next) => {
    response.render('reto3');
};

exports.getReto4 = (request, response, next) => {
    response.render('reto4');
};

exports.postReto4 = (request, response, next) => {
    response.render('reto4');
};

exports.getFinal = (request, response, next) => {
    response.render('final');
};