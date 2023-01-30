const hamMenu = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.nav__list-container');
const rightContent = document.querySelector('.header__right-content');
const overlay = document.querySelector('.overlay');



hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    navigation.classList.toggle('show');
    overlay.classList.toggle('show');
    rightContent.classList.toggle('darken');

    if (navigation.classList.contains('show')) {
        navigation.classList.add('fade-in');
        setTimeout(() => {
            navigation.classList.remove('fade-in');
        }, 500);
    } else {
        navigation.classList.add('fade-out');
        setTimeout(() => {
            navigation.classList.remove('fade-out');
        }, 500);
    }
});

