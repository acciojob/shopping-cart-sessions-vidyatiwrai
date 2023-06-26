// Get the products from an API or hardcode them
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 }
];

// Function to get the cart from session storage
function getCart() {
  const cart = sessionStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// Function to update the cart in session storage
function updateCart(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render the products
function renderProducts() {
  const productsContainer = document.getElementById("products");

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
      <span>${product.name}</span>
      <span>$${product.price}</span>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

    productsContainer.appendChild(productElement);
  });
}

// Function to render the shopping cart
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

// Function to handle adding items to the cart
function handleAddToCart(event) {
  const productId = event.target.dataset.id;
  const product = products.find(item => item.id === parseInt(productId));

  if (product) {
    const cart = getCart();
    cart.push(product);
    updateCart(cart);
    renderCart();
  }
}

// Add event listener to the "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.getElementsByClassName("add-to-cart");

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", handleAddToCart);
  }

  // Render products and cart when the page loads
  renderProducts();
  renderCart();
});
