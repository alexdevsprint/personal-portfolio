import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

// Инициализация swiper должна быть до использования его методов
const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard],    
  navigation: false,
      keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Курсор перетягивания
  grabCursor: true,
  speed: 500,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  on: {
    // Подія "slideChange" для контролю блокування кнопок
    slideChange: function () {
      sliderPrev.disabled = false;
      sliderNext.disabled = false;

      if (swiper.isEnd) {
        sliderNext.disabled = true;
      }

      if (swiper.isBeginning) {
        sliderPrev.disabled = true;
      }
    },
  },
});

// Получаем элементы кнопок
const sliderPrev = document.querySelector('.slider-nav-prev');
const sliderNext = document.querySelector('.slider-nav-next');

let data;

sliderPrev.disabled = true;

// Обработчики для кнопок
sliderNext.addEventListener('click', () => {
  swiper.slideNext();
});

sliderPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

// Обработчики для стрелок


// Функция рендеринга данных
async function fetchData() {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    renderItems(response.data);
  } catch (error) {
    renderError();
    sliderPrev.disabled = true;
    sliderNext.disabled = true;
    iziToast.error({
      title: 'Error',
      message: 'Something wrong, try again later!',
    });
  }
}

// Функция рендеринга элементов с отзывами
function renderItems(data) {
  const slider = document.querySelector('.slider-list');
  const markup = data
    .map(
      ({ author, avatar_url, review }) =>
        `
           <li class="swiper-slide slider-item">
 <img class="slider-item-img" alt="body" src="${avatar_url}" loading="lazy">
                <p class="slider-item-title">${author}</p>
                <p class="slider-item-info">${review}</p>
            </li>             
            `
    )
    .join('');

  slider.insertAdjacentHTML('beforeend', markup);
}

// Функция для обработки ошибки
function renderError() {
  const slider = document.querySelector('.slider-list');
  const markup = `
  <div class="slider-error">
    Not found!
  </div>  
  `;

  slider.insertAdjacentHTML('beforeend', markup);
}

// Запуск данных
fetchData();
