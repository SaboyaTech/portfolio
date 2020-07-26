const parallax = document.getElementById('filter');

window.addEventListener('scroll', () => {
	const offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});
