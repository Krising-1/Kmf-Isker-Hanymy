const buttonLeft = document.querySelector('.hero__button--left');
const buttonRight = document.querySelector('.hero__button--right');
const buttonLeftSlider = document.querySelector('.swiper-button-prev');
const buttonRightSlider = document.querySelector('.swiper-button-next');

buttonLeft.addEventListener('click', () => {
  buttonLeftSlider.click();
});

buttonRight.addEventListener('click', () => {
  buttonRightSlider.click();
});


const initSwiper = () => {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper', {
    speed: 250,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1920: {
        width: 851,
      },
    }
  });
};

export { initSwiper };
