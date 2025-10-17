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

function removeFromCart(name) {
  let cart = getCart();
  cart = cart.filter(item => item.name !== name);
  saveCart(cart);
  updateCartCount();
  alert(`🗑️ تم حذف ${name} من السلة`);
}

function changeQuantity(button, delta) {
  const input = button.parentElement.querySelector("input");
  let qty = parseInt(input.value);
  qty += delta;
  if (qty < 1) qty = 1;
  input.value = qty;
}

function addProduct(button, name, price) {
  const input = button.parentElement.querySelector(".quantity input");
  const quantity = parseInt(input.value);
  addToCart(name, price, quantity);
}

function removeProduct(name) {
  removeFromCart(name);
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = count;
}

window.addEventListener("load", updateCartCount);
