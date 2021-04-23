const boton_nombre = document.getElementById("boton_nombre");

boton_nombre.addEventListener('click', function() {
    let nombre = document.getElementById("nombre").value;
    console.log('nombre');

    let msj_empezar = document.getElementById("enlace");
    msj_empezar.innerHTML = "Empezar";
});
