const buttonLeftHero = document.querySelector('.hero__button--left');
const buttonRightHero = document.querySelector('.hero__button--right');
const buttonLeftHeroPrimary = document.querySelector('.swiper-button-prev--hero');
const buttonRightHeroPrimary = document.querySelector('.swiper-button-next--hero');
const buttonLeftBusinessPrimary = document.querySelector('.swiper-button-prev--business');
const buttonRightBusinessPrimary = document.querySelector('.swiper-button-next--business');
const buttonLeftBusiness = document.querySelector('.swiper-button-business--left');
const buttonRightBusiness = document.querySelector('.swiper-button-business--right');

const buttonRelocation = (fromButton, toButton) => {
  fromButton.addEventListener('click', () => {
    toButton.click();
  });
};

buttonRelocation(buttonRightHero, buttonRightHeroPrimary);
buttonRelocation(buttonLeftHero, buttonLeftHeroPrimary);
buttonRelocation(buttonLeftBusiness, buttonLeftBusinessPrimary);
buttonRelocation(buttonRightBusiness, buttonRightBusinessPrimary);

const initHeroSwiper = () => {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper-hero', {
    speed: 500,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next--hero',
      prevEl: '.swiper-button-prev--hero',
    },

    pagination: {
      el: '.swiper-pagination--hero',
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

const initBusinessSwiper = () => {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper-business', {
    speed: 800,
    spaceBetween: 24,
    loop: true,
    width: 240,

    navigation: {
      nextEl: '.swiper-button-next--business',
      prevEl: '.swiper-button-prev--business',
    },

    pagination: {
      el: '.swiper-pagination--business',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      1920: {
        width: 1128,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });
};

const initEducationSwiper = () => {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper--education', {
    speed: 800,
    spaceBetween: 16,
    loop: true,
    width: 240,

    breakpoints: {
      1920: {
        width: 1128,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
    }
  });
};

const initNewsSwiper = () => {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper--news', {
    speed: 800,
    spaceBetween: 16,
    loop: true,
    width: 264,

    breakpoints: {
      1920: {
        width: 1128,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24,
      },
    }
  });
};

const initAllSliders = () => {
  initHeroSwiper();
  initBusinessSwiper();
  initEducationSwiper();
  initNewsSwiper();
};

export { initAllSliders };
