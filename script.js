
const items = document.querySelectorAll('.item');

window.addEventListener('scroll', () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }
  });
});

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(30px)";
  item.style.transition = "all 0.6s ease";
});


const cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('🛒 Added to Cart Successfully!');
  });
});