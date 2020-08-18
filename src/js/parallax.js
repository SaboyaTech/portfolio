const parallax = document.querySelector('.filter-about');

window.addEventListener('scroll', () => {
	const offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

const parallax_1 = document.querySelector('#contact');

window.addEventListener('scroll', () => {
	const offset = window.pageYOffset;
	parallax_1.style.backgroundPositionY = offset * 0.7 + 'px';
});
