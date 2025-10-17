// Flip card on click or keyboard (Enter or Space)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  card.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});

// Buy button click
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const productName = btn.closest('.product-card').querySelector('.card-front h3').textContent;
    alert(`✅ تم إضافة "${productName}" إلى السلة!`);
  });
});
