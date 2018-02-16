

// COORDENADAS
// o objeto Event possui as propriedades clientX e clientY que especificam as
// coordenadas do cursor do mouse em relação à janela contêiner
function coordenadas(event) {
	console.log("Coordenadas de X: " +  event.clientX +
		", coordenadas de Y: " + event.clientY);
}
window.addEventListener("click", coordenadas);


