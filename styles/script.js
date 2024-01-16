document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger');
    const navList = document.querySelector('nav ul');

    burgerIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
    });



});