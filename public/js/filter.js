document.addEventListener("DOMContentLoaded", function() {
    var selectComunidad = document.getElementById("comunidad");
    var gimnasios = document.querySelectorAll(".gimnasio");

    selectComunidad.addEventListener("change", function() {
        var comunidadSeleccionada = selectComunidad.value;

        gimnasios.forEach(function(gimnasio) {
            var dataComunidad = gimnasio.getAttribute("data-comunidad");
            if (comunidadSeleccionada === "todas" || comunidadSeleccionada === dataComunidad) {
                gimnasio.style.display = "block"; // Mostrar el gimnasio
            } else {
                gimnasio.style.display = "none"; // Ocultar el gimnasio
            }
        });
    });
});