var carritoItems = [];

function actualizarResumenCarrito() {
    var carritoItemsDiv = document.getElementById("carrito-items");
    carritoItemsDiv.innerHTML = ""; // Vaciar el contenido actual del resumen del carrito

    carritoItems.forEach(function(item) {
        var itemDiv = document.createElement("div");
        itemDiv.textContent = item.nombre + " - " + item.precio + "€"; // Puedes personalizar cómo se muestra cada elemento del carrito
        carritoItemsDiv.appendChild(itemDiv);
    });

    // Calcular el total del carrito
    var total = carritoItems.reduce(function(acumulador, item) {
        return acumulador + item.precio;
    }, 0);

    var carritoTotalSpan = document.getElementById("carrito-total");
    carritoTotalSpan.textContent = total;
}

function realizarPago() {
    // Aquí puedes implementar la lógica para procesar el pago
    // Por ejemplo, enviar los elementos del carrito al servidor para procesar el pago
    // Luego, puedes redirigir al usuario a una página de confirmación de pago
    // window.location.href = "/html/confirmacion_pago.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo: Agregar algunos elementos al carrito para demostración
    carritoItems.push({ nombre: "Cuota Premium", precio: 29.99 });
    carritoItems.push({ nombre: "Cuota Básica", precio: 19.99 });

    actualizarResumenCarrito();
});