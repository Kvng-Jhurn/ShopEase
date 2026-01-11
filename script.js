document.addEventListener("DOMContentLoaded", function () {

    const cartButtons = document.querySelectorAll(".add-to-cart");
    const cartModal = document.getElementById("cart-modal");
    const cartItems = document.getElementById("cart-items");
    const closeCart = document.getElementById("close-cart");

    // Load saved cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display saved items on page load
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartItems.appendChild(li);
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName =
                button.parentElement.querySelector("h3").textContent;

            // Save to cart
            cart.push(productName);
            localStorage.setItem("cart", JSON.stringify(cart));

            // Display in modal
            const li = document.createElement("li");
            li.textContent = productName;
            cartItems.appendChild(li);

            cartModal.style.display = "flex";
        });
    });

    closeCart.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

});
