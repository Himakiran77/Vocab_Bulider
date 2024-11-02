const navbarToggle = document.getElementById('navbarToggle');
const mobileMenu = document.getElementById('mobileMenu');

navbarToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
    }
});

