if (window.innerWidth > 768) {
  const slider = document.querySelector(".slider-container");
  const slides = document.querySelector(".slides");
  const slideWidth = slides.firstElementChild.clientWidth;
  const slideCount = slides.children.length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex++;

    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function updateSliderPosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    for (let i = 0; i < slideCount; i++) {
      if (i === currentIndex) {
        slides.children[i].classList.add("active");
      } else {
        slides.children[i].classList.remove("active");
      }
    }
  }

  setInterval(nextSlide, 2000);
}

let order = document.querySelector(".order-eva");
let form = document.querySelector(".form");
let send = document.querySelector(".send");

order.addEventListener("click", openform);
function openform() {
  form.style.display = "block";
}

send.addEventListener("click", closeform);
function closeform() {
  form.style.display = "none";
  form.preventDefault();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
