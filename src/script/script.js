const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const shoppingCart = document.querySelector('.shopping-cart');
const cartBtn = document.querySelector('#cart-btn');
const favForm = document.querySelector('.fav-form');
const favBtn = document.querySelector('#fav-btn');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  favForm.classList.remove('active');
  navbar.classList.remove('active');
};

cartBtn.onclick = () => {
  shoppingCart.classList.toggle('active');
  favForm.classList.remove('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
};

favBtn.onclick = () => {
  favForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
};

menuBtn.onclick = () => {
  navbar.classList.toggle('active');
  favForm.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
};
window.onscroll = () => {
  navbar.classList.remove('active');
  favForm.classList.remove('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header .navbar a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  if (window.scrollY > 50) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
};
