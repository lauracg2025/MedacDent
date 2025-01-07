function goToGestorCitas() {
    window.location.href = "/index.html";
}



function guardar() {
    var cita = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        telefono: document.getElementById("telefono").value,
        fechaNac: document.getElementById("fechaNacimiento").value,
        fechaCita: document.getElementById("fecha").value,
        dni:document.getElementById("dni").value
    }

    // Guardar los datos en el localStorage para pasarlos a la otra página
    localStorage.setItem("miCita" + Date.now()+"-"+ Math.floor(Math.random() * 10000), JSON.stringify(cita));
}