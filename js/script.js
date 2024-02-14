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
    // Update slide opacity
    for (let i = 0; i < slideCount; i++) {
      if (i === currentIndex) {
        slides.children[i].classList.add("active");
      } else {
        slides.children[i].classList.remove("active");
      }
    }
  }

  setInterval(nextSlide, 2000); // Auto-rotate every 2 seconds
}
// Получаем кнопку "Заказать" и форму
const orderButton = document.getElementById("orderButton");
const form = document.getElementById("myForm");

// Добавляем обработчик события на клик по кнопке "Заказать"
orderButton.addEventListener("click", function () {
  // Показываем форму, удаляя класс hidden
  form.classList.remove("hidden");
});

// Получаем кнопку "Отправить"
const submitButton = document.getElementById("submitButton");

// Добавляем обработчик события на клик по кнопке "Отправить"
submitButton.addEventListener("click", function () {
  // Скрываем форму, добавляя класс hidden
  form.classList.add("hidden");
  // Здесь можно добавить логику для отправки данных формы
});

// Добавляем обработчик события на отправку формы
form.addEventListener("submit", function (event) {
  // Предотвращаем стандартное поведение формы
  event.preventDefault();

  // Далее можно добавить логику для отправки данных формы, например, с использованием AJAX или Fetch API

  // В данном примере просто выводим сообщение в консоль
  console.log("Данные формы были отправлены");

  // Здесь можно добавить код для скрытия формы, если это необходимо
  // Например, можно добавить следующую строку:
  // form.style.display = 'none';
});
