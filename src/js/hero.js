document.querySelectorAll('.hero-list-item').forEach(item => {
  item.addEventListener('click', e => {
    const link = item.querySelector('a');
    if (link) {
      link.click();
    }
  });
});
