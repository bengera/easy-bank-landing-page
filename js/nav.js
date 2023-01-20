const hamMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.nav__list-container');
const rightContent = document.querySelector('.header__right-content');
const overlay = document.querySelector('.overlay');



hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigation.classList.toggle('show');
    overlay.classList.toggle('show');
    rightContent.classList.toggle('darken');
});

