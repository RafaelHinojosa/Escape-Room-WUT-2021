const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    
    let veredicto = document.getElementById("veredicto");

    if(user === "3251" && password === "hola") {
        veredicto.innerHTML = '<a href="reto1.html"/><button>Siguiente</button></a>';
    }
    else {
        veredicto.innerHTML = "Incorrecto";
    }    
});