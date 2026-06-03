const slides = document.querySelectorAll(".slide");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

let currentIndex = 0;

totalEl.textContent = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("slide--active", i === index);
  });
  currentIndex = index;
  currentEl.textContent = index + 1;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    if (currentIndex < slides.length - 1) showSlide(currentIndex + 1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (currentIndex > 0) showSlide(currentIndex - 1);
  }
});

showSlide(0);
