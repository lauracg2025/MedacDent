function goToGestorCitas() {
    window.location.href = "/index.html";
}

window.onload = function() {
    // Obtenemos todas las citas almacenadas en LocalStorage. Solo aquellas que empiezan por "miCita"
    var lista = [];
    for (var i = 0; i < localStorage.length; i++){
        var clave = localStorage.key(i);
        if(clave.startsWith("miCita")){
            var valor = JSON.parse(localStorage.getItem(clave));
            lista.push(valor);
        }
    }

    if (lista.length > 0) {        
        // Obtener el tbody de la tabla donde se agregarán las filas
        const tbody = document.querySelector('#tabla-citas tbody');
        
        // Limpiar el contenido actual del tbody
        tbody.innerHTML = '';
        
        // Recorrer la lista de citas y agregar una fila por cada cita
        lista.forEach(cita => {
            // Crear una nueva fila para la tabla
            const fila = document.createElement('tr');
            
            // Crear y agregar la celda para el Nombre
            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = cita.nombre;
            fila.appendChild(celdaNombre);
            
            // Crear y agregar la celda para los Apellidos
            const celdaApellidos = document.createElement('td');
            celdaApellidos.textContent = cita.apellidos;
            fila.appendChild(celdaApellidos);
            
            // Crear y agregar la celda para la fecha de nacimiento
            const celdaFechaNac = document.createElement('td');
            celdaFechaNac.textContent = cita.fechaNac;
            fila.appendChild(celdaFechaNac);

            // Crear y agregar la celda para el DNI
            const celdaDni = document.createElement('td');
            celdaDni.textContent = cita.dni;
            fila.appendChild(celdaDni);

            // Crear y agregar la celda para el telefono
            const celdaTelefono = document.createElement('td');
            celdaTelefono.textContent = cita.telefono;
            fila.appendChild(celdaTelefono);

            // Crear y agregar la celda para el telefono
            const celdaFechaCita = document.createElement('td');
            celdaFechaCita.textContent = cita.fechaCita;
            fila.appendChild(celdaFechaCita);

            const celdamodificar = document.createElement('td');
            const botonModificar = document.createElement('button');
            botonModificar.textContent = "Modificar";
            celdamodificar.appendChild(botonModificar);
            fila.appendChild(celdamodificar);

            const celdaEliminar = document.createElement('td');
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = "Eliminar";
            celdaEliminar.appendChild(botonEliminar);
            fila.appendChild(celdaEliminar);

    
            
            // Agregar la fila a la tabla
            tbody.appendChild(fila);
        });
    } else {
        console.log('No hay citas disponibles');
    }
};
