/* ============================================================
   LCM – main.js
   Handles: slideshow, featured card carousel, partner pagination
============================================================ */

/* ---------- SLIDESHOW ---------- */
var currentSlide = 0;

function getSlides() {
  return document.querySelectorAll('.slide');
}

function showSlide(index) {
  var slides = getSlides();
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(dir) { showSlide(currentSlide + dir); }
function goToSlide(index) { showSlide(index); }

setInterval(function () { changeSlide(1); }, 6000);


/* ---------- FEATURED CARD CAROUSEL ---------- */
var currentCard = 0;

function showCard(index) {
  var cards = document.querySelectorAll('.featured__card');
  if (!cards.length) return;
  cards[currentCard].classList.remove('featured__card--active');
  currentCard = (index + cards.length) % cards.length;
  cards[currentCard].classList.add('featured__card--active');
}

function changeCard(dir) { showCard(currentCard + dir); }


