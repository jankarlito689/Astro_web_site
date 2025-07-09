document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger');
		const nav = document.getElementById('navMenu');

		if (burger && nav) {
			burger.addEventListener('click', () => {
			    nav.classList.toggle('active'); // <<-- debe ser 'active'
			});
		}	
	});