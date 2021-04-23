const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let ans = document.getElementById("respuesta").value;
    let veredicto = document.getElementById("veredicto");

    ans = ans.toLowerCase();
    if(ans === "lnsd") {
        veredicto.innerHTML = "Secuencia correcta, decodificacion en proceso";
    }
    else {
        veredicto.innerHTML = "Error, acceso denegado";
    }
    
    console.log(ans);

});