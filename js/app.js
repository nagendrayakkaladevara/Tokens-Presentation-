const slides = document.querySelectorAll(".slide");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

let currentIndex = 0;

totalEl.textContent = slides.length;

function fitActiveSlide() {
  slides.forEach((slide) => {
    const inner = slide.querySelector(".slide__inner");
    if (!inner) return;

    inner.style.transform = "";
    inner.style.width = "";

    if (!slide.classList.contains("slide--active")) return;

    const styles = getComputedStyle(slide);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);
    const availableHeight = slide.clientHeight - paddingTop - paddingBottom;
    const contentHeight = inner.scrollHeight;

    if (contentHeight > availableHeight) {
      const scale = (availableHeight / contentHeight) * 0.97;
      inner.style.transform = `scale(${scale})`;
    }
  });
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("slide--active", i === index);
  });
  currentIndex = index;
  currentEl.textContent = index + 1;
  requestAnimationFrame(() => requestAnimationFrame(fitActiveSlide));
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

window.addEventListener("resize", fitActiveSlide);
window.addEventListener("load", fitActiveSlide);
document.fonts?.ready.then(fitActiveSlide);

showSlide(0);
