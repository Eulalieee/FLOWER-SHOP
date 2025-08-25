console.log("Website bán hoa đã tải xong!");
let cartCount = 0;
let total = 0;

function addToCart(price) {
  cartCount++;
  total += price;
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('total');
  if (countEl) countEl.innerText = cartCount;
  if (totalEl) totalEl.innerText = total.toLocaleString();
}

function checkout() {
  if (cartCount === 0) {
    alert("Giỏ hàng đang trống!");
  } else {
    alert(`Bạn đã đặt hàng thành công!\nTổng tiền: ${total.toLocaleString()}đ`);
    cartCount = 0;
    total = 0;
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('total').innerText = total;
  }
}

function showPopup(imgSrc, title, price) {
  document.getElementById('popup-img').src = imgSrc;
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-price').innerText = price.toLocaleString() + "đ";

  
  const btn = document.getElementById('popup-add');
  btn.onclick = function(){ addToCart(price) };

  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  popup.setAttribute('aria-hidden', 'false');

  
  popup.addEventListener('click', onBackdrop);
  document.addEventListener('keydown', onEsc);
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
  popup.setAttribute('aria-hidden', 'true');
  popup.removeEventListener('click', onBackdrop);
  document.removeEventListener('keydown', onEsc);
}

function onBackdrop(e) {
  if (e.target.id === 'popup') hidePopup();
}
function onEsc(e) {
  if (e.key === 'Escape') hidePopup();
}
const langDropdown = document.querySelector('.lang-dropdown');
const langBtn = document.querySelector('.lang-btn');

langBtn.addEventListener('click', () => {
  langDropdown.classList.toggle('active');
});


document.addEventListener('click', (e) => {
  if (!langDropdown.contains(e.target)) {
    langDropdown.classList.remove('active');
  }
});

