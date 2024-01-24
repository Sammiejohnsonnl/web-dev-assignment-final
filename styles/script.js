function toggleNav() {
    const navList = document.querySelector('.container nav ul');
    if (navList) {
        navList.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.href;

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkUrl = link.href;

        if (currentUrl === linkUrl) {
            link.parentElement.classList.add('active');
        }
    });
});
