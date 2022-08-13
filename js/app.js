const burgerBtn = document.querySelector('.nav__burger');
const burgerMenu = document.querySelector('.menu');

burgerBtn.addEventListener('click', showNavMenu);

function showNavMenu(e) {
	burgerMenu.classList.toggle('_active');
	this.classList.toggle('_active');
}

