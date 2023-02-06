const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

// Отслеживаем клик по иконки menu-hamburger
hamburger.addEventListener('click', () => {
    // Додаем class active
    menu.classList.add('active');
});

// Отслеживаем клик по иконки close
close.addEventListener('click', () => {
    // Убираем class active
    menu.classList.remove('active');
});

