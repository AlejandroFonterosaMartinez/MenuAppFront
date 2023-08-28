/* Alejandro Fonterosa Martínez */
//  footer
const footer = document.querySelector('.footer');
const year = new Date().getFullYear();
footer.textContent = `© ${year} - Alejandro Fonterosa Martínez`;


// reloj
function actualizarReloj() {
	const divReloj = document.querySelector('.reloj');
	const fecha = new Date();
	const hora = fecha.getHours().toString().padStart(2, '0');
	const minutos = fecha.getMinutes().toString().padStart(2, '0');
	const segundos = fecha.getSeconds().toString().padStart(2, '0');

	const horaFormateada = `${hora}:${minutos}:${segundos}`;
	divReloj.textContent = horaFormateada;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

// scroll reveal
ScrollReveal().reveal('#clima, #aplicaciones,#noticias', {
	delay: 500,
	distance: '20px',
	origin: 'right',
	easing: 'ease-out',
	duration: 300,
});
ScrollReveal().reveal('.reloj', {
	delay: 500,
	distance: '20px',
	origin: 'top',
	easing: 'ease-out',
	duration: 300,
});
