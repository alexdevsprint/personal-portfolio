import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Keyboard } from 'swiper/modules';

const swiper = new Swiper('.swiper-project', {
   modules: [Navigation, Keyboard],
    slidesPerView: 1,
     spaceBetween: 0,
  navigation: false, // Вимикнаємо стандартні кнопки
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Кнопки навігації
const customButtonPrev = document.querySelector('.custom-button-prev');
const customButtonNext = document.querySelector('.custom-button-next');

customButtonPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

customButtonNext.addEventListener('click', () => {
  swiper.slideNext();
});

// Функція для оновлення стану кнопок
const updateButtonState = () => {
  customButtonPrev.disabled = swiper.isBeginning;
  customButtonNext.disabled = swiper.isEnd;

  if (swiper.isBeginning) {
    customButtonPrev.classList.add('disabled');
  } else {
    customButtonPrev.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    customButtonNext.classList.add('disabled');
  } else {
    customButtonNext.classList.remove('disabled');
  }
};

// Додаємо обробку стану кнопок
swiper.on('reachEnd', () => {
  updateButtonState();
});

swiper.on('reachBeginning', () => {
  updateButtonState();
});

swiper.on('fromEdge', () => {
  updateButtonState();
});

// Оновлюємо стан кнопок при ініціалізації
updateButtonState();
