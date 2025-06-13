const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const prevBtn = document.querySelector('.carrusel-btn.prev');
const nextBtn = document.querySelector('.carrusel-btn.next');
const indicadores = document.querySelectorAll('.indicador');
let current = 0;
let autoSlide;

function mostrarSlide(idx) {
  current = (idx + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${current * 100}%)`;
  indicadores.forEach((ind, i) => {
    ind.classList.toggle('activo', i === current);
  });
}

function siguiente() {
  mostrarSlide(current + 1);
  reiniciarAuto();
}

function anterior() {
  mostrarSlide(current - 1);
  reiniciarAuto();
}

function irASlide(idx) {
  mostrarSlide(idx);
  reiniciarAuto();
}

prevBtn.addEventListener('click', anterior);
nextBtn.addEventListener('click', siguiente);
indicadores.forEach((ind, i) => {
  ind.addEventListener('click', () => irASlide(i));
});

function auto() {
  autoSlide = setInterval(() => {
    mostrarSlide(current + 1);
  }, 4000);
}

function reiniciarAuto() {
  clearInterval(autoSlide);
  auto();
}

auto();
