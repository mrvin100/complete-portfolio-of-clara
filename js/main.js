/* custom main js file */

const menuBtn = document.getElementById('menu-btn'),
	  closeBtn = document.getElementById('close-btn'),
	  navbar = document.querySelector('.navbar'),
	  header = document.querySelector('.header');

if(menuBtn){
	menuBtn.addEventListener('click', () =>{
		navbar.classList.add('active');
	})
}
if(closeBtn){
	closeBtn.addEventListener('click', () =>{
		navbar.classList.remove('active');
	})
}


window.onscroll = () => {
	navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
}); 

let body = document.body;
let toggleBtn = document.querySelector('#theme');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
	toggleBtn.classList.replace('bx-moon', 'bx-sun');
	body.classList.add('dark');
	localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
	toggleBtn.classList.replace('bx-sun', 'bx-moon');
	body.classList.remove('dark');
	localStorage.setItem('dark-mode', 'disabled');
}


toggleBtn.onclick = (e) =>{
	let darkMode = localStorage.getItem('dark-mode');
	if(darkMode === 'disabled'){
		enableDarkMode();
	}else{
		disableDarkMode();
	}
}

if(darkMode === 'enabled'){
	enableDarkMode();
}















