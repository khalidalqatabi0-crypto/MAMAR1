// 🛒 استرجاع السلة من localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// 📝 حفظ السلة
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ➕ إضافة منتج للسلة
function addToCart(name, price) {
  let cart = getCart();
  let item = cart.find(i => i.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  saveCart(cart);
  alert('تمت إضافة المنتج إلى السلة ✅');
}

// 🖼️ عرض السلة
function displayCart() {
  let cart = getCart();
  let tbody = document.getElementById('cart-items');
  let total = 0;

  if (!tbody) return; // إذا لم تكن صفحة السلة

  tbody.innerHTML = '';

  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price} ريال</td>
      <td>
        <button onclick="changeQuantity(${index}, -1)">-</button>
        ${item.quantity}
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </td>
      <td>${subtotal} ريال</td>
      <td>
        <button onclick="removeItem(${index})">🗑️ حذف</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  document.getElementById('total').textContent = total;
}

// 🧮 تغيير الكمية
function changeQuantity(index, amount) {
  let cart = getCart();
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  displayCart();
}

// ❌ حذف منتج
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  displayCart();
}

// 💳 إتمام عملية الشراء
function checkout() {
  let cart = getCart();
  if (cart.length === 0) {
    alert('السلة فارغة 🛒');
    return;
  }

  let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  alert(`✅ تم إتمام الشراء. الإجمالي: ${total} ريال`);

  // يمكنك هنا إرسال الطلب لسيرفر أو إيميل
  localStorage.removeItem('cart');
  displayCart();
}

// 📌 عند تحميل الصفحة إذا كانت صفحة السلة
if (document.getElementById('cart-items')) {
  displayCart();
}
