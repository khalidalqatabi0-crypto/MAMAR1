// cart.js
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price, quantity) {
  const cart = getCart();
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  saveCart(cart);
  updateCartCount();
  alert(`✅ تمت إضافة ${quantity} × ${name} إلى السلة!`);
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

window.addEventListener("load", updateCartCount);
