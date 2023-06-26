// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  const cartContainer = document.getElementById("cart");
  const cart = getCart();

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No items in the cart</p>";
    return;
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;

    cartContainer.appendChild(cartItemElement);
  });

  const cartTotalElement = document.createElement("div");
  cartTotalElement.innerHTML = `<strong>Total: $${cartTotal}</strong>`;
  cartContainer.appendChild(cartTotalElement);
}


// Add item to cart
function addToCart(productId) {}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.getElementsByClassName("add-to-cart");

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", handleAddToCart);
  }

  // Render products and cart when the page loads
  renderProducts();
  renderCart();
});
// renderProducts();
// renderCart();
