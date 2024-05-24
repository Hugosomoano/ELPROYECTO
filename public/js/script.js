document.addEventListener('DOMContentLoaded', function () {
    const selectComunidad = document.getElementById('comunidad');
    const gimnasiosList = document.getElementById('gimnasios-list');
    const imagenesContainer = document.getElementById('imagenes');

    // Cargar datos de gimnasios
    fetch('data/gimnasios.json')
        .then(response => response.json())
        .then(gimnasios => {
            // Añadir opciones de comunidades autónomas al select
            const comunidades = [...new Set(gimnasios.map(gimnasio => gimnasio.comunidad))];
            comunidades.forEach(comunidad => {
                const option = document.createElement('option');
                option.value = comunidad;
                option.textContent = comunidad;
                selectComunidad.appendChild(option);
            });

            // Mostrar todos los gimnasios al cargar la página
            mostrarGimnasios('todas', gimnasios);
            
            // Filtrar gimnasios al cambiar la selección
            selectComunidad.addEventListener('change', () => {
                const comunidadSeleccionada = selectComunidad.value;
                mostrarGimnasios(comunidadSeleccionada, gimnasios);
            });
        });

    function mostrarGimnasios(comunidadSeleccionada, gimnasios) {
        // Limpiar la lista antes de mostrar los nuevos gimnasios
        gimnasiosList.innerHTML = '';

        // Filtrar gimnasios según la comunidad seleccionada
        const gimnasiosFiltrados = comunidadSeleccionada === 'todas'
            ? gimnasios
            : gimnasios.filter(gimnasio => gimnasio.comunidad === comunidadSeleccionada);

        // Mostrar los gimnasios filtrados
        gimnasiosFiltrados.forEach(gimnasio => {
            const div = document.createElement('div');
            div.className = 'gimnasio';
            div.innerHTML = `
                <h2>${gimnasio.nombre}</h2>
                <p>${gimnasio.direccion}</p>
                <img src="${imagenesContainer.querySelector(`[alt="${gimnasio.nombre}"]`).src}" alt="${gimnasio.nombre}">
            `;
            gimnasiosList.appendChild(div);
        });
    }
    function mostrarGimnasios(comunidadSeleccionada, gimnasios) {
        // Limpiar la lista antes de mostrar los nuevos gimnasios
        gimnasiosList.innerHTML = '';
    
        // Mostrar los gimnasios filtrados
        gimnasios.forEach(gimnasio => {
            const div = document.createElement('div');
            div.className = 'gimnasio';
            div.innerHTML = `
                <h2>${gimnasio.nombre}</h2>
                <p>${gimnasio.direccion}</p>
                <img src="/ruta/a/imagen/${gimnasio.nombre.replace(/\s+/g, '-').toLowerCase()}.jpg" alt="${gimnasio.nombre}">
            `;
            gimnasiosList.appendChild(div);
        });
    }
});

