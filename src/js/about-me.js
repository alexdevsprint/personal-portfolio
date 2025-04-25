import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const ac = new Accordion('.aboutme-ac-list', {
  elementClass: 'aboutme-ac-item',
  triggerClass: 'aboutme-ac-trigger',
  panelClass: 'aboutme-ac-panel',
  activeClass: 'is-active',
  duration: 400,
  showMultiple: false,
  collapse: true,
  openOnInit: [0],
});

let previousIndex = 0;

const swiper = new Swiper('.aboutme-swiper', {
  modules: [Navigation, Keyboard],
  loop: true,
  spaceBetween: 0,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.aboutme-swiper-button-next',
    prevEl: '.aboutme-swiper-button-prev',
  },
  initialSlide: 0,
  slideActiveClass: 'aboutme-active-slide',
  wrapperClass: 'aboutme-swiper-wrapper',
  slideClass: 'aboutme-swiper-slide',

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  touchEventsTarget: 'swiper',

  on: {
    slideChangeTransitionStart() {
      const slides = swiper.slides.length;
      const realIndex = swiper.realIndex;

      document.querySelectorAll('.aboutme-swiper-slide').forEach(slide => {
        slide.classList.remove('rotate-left', 'rotate-right');
      });

      let direction = 'right';
      if (
        (realIndex > previousIndex && realIndex - previousIndex < slides / 2) ||
        (realIndex < previousIndex && previousIndex - realIndex > slides / 2)
      ) {
        direction = 'right';
      } else {
        direction = 'left';
      }

      previousIndex = realIndex;

      const activeSlide = document.querySelector('.aboutme-active-slide');
      if (activeSlide) {
        activeSlide.classList.add(
          direction === 'right' ? 'rotate-right' : 'rotate-left'
        );
      }
    },
  },
});


