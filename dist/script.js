var menuToggleOpen, menuToggleClose, headerMenu, sidebarHamburger;

menuToggleOpen = document.getElementById('menuToggleOpen');
menuToggleClose = document.getElementById('menuToggleClose');
sidebarHamburger = document.querySelector('.sidebar-hamburger')
sidebarMenu = document.querySelector('.sidebar__menu');

menuToggleOpen.addEventListener('click', function () {
    sidebarMenu.classList.toggle('open');
    sidebarHamburger.classList.toggle('change');
})

menuToggleClose.addEventListener('click', function () {
    sidebarMenu.classList.toggle('open');
})