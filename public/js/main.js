document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    var cartCounter = document.getElementById("cart-counter");
    var contadorCarrito = 0;

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            contadorCarrito++;
            cartCounter.textContent = contadorCarrito;
        });
    });
});