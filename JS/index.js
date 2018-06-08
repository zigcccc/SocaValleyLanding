const fab = document.querySelector('#fab');
const sideMenu = document.querySelector('aside');

fab.addEventListener('click', e => {
	console.log(sideMenu.classList.contains('is-displayed'));
	if (sideMenu.classList.contains('is-displayed')) {
		sideMenu.classList.remove('is-displayed');
	} else {
		sideMenu.classList.add('is-displayed');
	}
});
