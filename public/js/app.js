let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(name + " added to cart 🛒");
    updateCartCount();
}

function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function updateCartCount() {
    let count = document.getElementById("cart-count");

    if (count) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.textContent = totalItems;
    }
}

updateCartCount();