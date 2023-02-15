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

// Автоматический пересчет процентов
const counters = document.querySelectorAll('.skills__retings-counter'),
      scales = document.querySelectorAll('.skills__retings-scale span');

counters.forEach( (item, i) => {
    scales[i].style.width = item.innerHTML;
});
