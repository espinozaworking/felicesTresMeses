const contrasenaCorrecta = "13082026";

function verificarContrasena() {

    const ingresada = document.getElementById("contrasenaIngresada").value;
    const error = document.getElementById("error");

    if (ingresada === contrasenaCorrecta){
        window.location.href = "home.html";
    }else{
        error.textContent = "Contraseña incorrecta. Deberías hacer memoria...";
        document.getElementById("contrasenaIngresada").value ="";
    }

}