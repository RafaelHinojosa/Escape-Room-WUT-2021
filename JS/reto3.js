const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let ans = document.getElementById("respuesta").value;
    let veredicto = document.getElementById("veredicto");

    // ans = ans.toLowerCase();
    // if(ans === "historia del tiempo") {
        veredicto.innerHTML = "Respuesta correcta." + "<br>";
        veredicto.innerHTML += '<a href="reto4.html"/><button>Siguiente</button></a>';
    // }
    // else {
    //     veredicto.innerHTML = "Incorrecto";
    // }
    
    // console.log(ans);
});