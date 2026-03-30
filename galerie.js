const images = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const header = document.querySelector('header');

let currentIndex = 0;

/* ouvrir */
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateImage();
    lightbox.classList.add('active');
    header.style.opacity = "0";
  });
});

/* update image */
function updateImage() {
  lightboxImg.src = images[currentIndex].src;
}

/* next */
function next() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

/* prev */
function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  next();
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  prev();
});

/* fermer */
function closeLightbox() {
  lightbox.classList.remove('active');
  header.style.opacity = "1";
}

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

/* clavier */
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "Escape") closeLightbox();
});

function resizeGridItems() {
  const grid = document.querySelector('.grid');
  const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const gap = parseInt(getComputedStyle(grid).getPropertyValue('gap'));

  grid.querySelectorAll('img').forEach(img => {
    const height = img.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + gap) / (rowHeight + gap));
    img.style.gridRowEnd = "span " + rowSpan;
  });
}

window.addEventListener('load', resizeGridItems);
window.addEventListener('resize', resizeGridItems);
