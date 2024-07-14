const header = document.querySelector('.header-main');
const burgerButton = header.querySelector('.header-main__burger');
const innerItems = header.querySelectorAll('.header-main__item--has-menu');

header.classList.remove('header-main--no-js');

const burgerToggle = () => {
  burgerButton.addEventListener('click', () => {
    if (header.classList.contains('header-main--menu-open')) {
      header.classList.remove('header-main--menu-open');
      burgerButton.classList.remove('header-main__burger--open');
    } else {
      header.classList.add('header-main--menu-open');
      burgerButton.classList.add('header-main__burger--open');
    }
  });
};

const innerListOpener = () => {
  innerItems.forEach((element) => {
    const button = element.querySelector('.header-main__list-opener');

    button.addEventListener('click', () => {
      if (element.classList.contains('header-main__item--open')) {
        element.classList.remove('header-main__item--open');
      } else {
        element.classList.add('header-main__item--open');
      }
    });
  });
};

export { burgerToggle, innerListOpener };
