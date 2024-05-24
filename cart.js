document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
    const cartIcon = document.getElementById('cart-icon');

    addToCartButton.addEventListener('click', function() {
        // Lógica para añadir al carrito
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCount += 1;
        localStorage.setItem('cartCount', cartCount);
        updateCartIcon(cartCount);
    });

    function updateCartIcon(count) {
        cartIcon.setAttribute('data-count', count);
    }

    // Inicializar el contador del carrito
    const initialCartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    updateCartIcon(initialCartCount);
});