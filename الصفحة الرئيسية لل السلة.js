// cart.js
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(name, price) {
  const cart = getCart();
  cart.push({ name, price });
  saveCart(cart);
  alert("تمت إضافة المنتج إلى السلة!");
  updateCartCount();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.length;
  const cartCountEl = document.getElementById('cart-count');
  if (cartCountEl) {
    cartCountEl.textContent = count;
  }
}

window.onload = () => {
  updateCartCount();
};
