// cart.js

// Function to add items to the cart
function addToCart(itemId) {
    // Retrieve the existing cart from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Add the item to the cart with a quantity of 1
        cart.push({ id: itemId, quantity: 1 });
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display the updated cart items
    displayCartItems();
}

// Function to display items in the cart
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the existing content
    cartItemsContainer.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ID: ${item.id}, Quantity: ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);
    });
}
