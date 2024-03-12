const cardSliders = document.querySelectorAll('.card-slider');

cardSliders.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    const currentCard = card;
    const currentTargetClass = e.target.className;
    if (
      currentTargetClass === 'img-first' ||
      currentTargetClass === 'img-second'
    ) {
      const images = currentCard.getElementsByClassName('card-slider__img');
      const lines = currentCard.getElementsByClassName('card-slider__line');

      if (currentTargetClass === 'img-first') {
        if (!images[0].classList.contains('active')) {
          images[0].classList.add('active');
          images[1].classList.remove('active');
          lines[0].classList.add('active');
          lines[1].classList.remove('active');
        }
      }

      if (currentTargetClass === 'img-second') {
        if (!images[1].classList.contains('active')) {
          images[0].classList.remove('active');
          images[1].classList.add('active');
          lines[0].classList.remove('active');
          lines[1].classList.add('active');
        }
      }
    }
  });
});
