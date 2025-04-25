import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.faq-accordion', {
    duration: 500,
    showMultiple: false,
    openOnInit: [],
  });

  const items = document.querySelectorAll('.faq-accordion .ac');
  items.forEach(item => {
    const trigger = item.querySelector('.ac-trigger');
    trigger.addEventListener('click', () => {
      setTimeout(() => {
        items.forEach(el => {
          if (el.classList.contains('is-active')) {
            el.classList.add('is-open');
          } else {
            el.classList.remove('is-open');
          }
        });
      }, 10);
    });
  });
});
