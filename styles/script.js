function toggleNav() {
    const navList = document.querySelector('.container nav ul');
    if (navList) {
        navList.classList.toggle('active');
    }
}