
// EXEMPLO RODA DO MOUSE
/*
<style>div#marcador { position: absolute; top: 50%; left: 50%; width: 100px; height: 100px; margin-left: -50px;
        margin-top: -50px; background: #f00; text-align: center; vertical-align: middle; line-height: 100px; color: #fff; } </style>
<div id="marcador"></div>
*/
function handle(delta) {
	var top = document.getElementById('marcador').style.top;
	if (top === '') {
		var y;
		if (self.innerHeight) { // Verifica se o navegador aceita a propriedade innerHeight
			y = self.innerHeight;
		} else if (document.documentElement &&
			document.documentElement.clientHeight) { // Se não aceitar, verifica se aceita clientHeight
			y = document.documentElement.clientHeight;
		} else if (document.body) { // Em último caso utilizar o corpo (body) da página como referência
			y = document.body.clientHeight;
		}
		top = Math.round((y - 50) / 2); // Definindo a posição top do elemento na página
	} else {
		top = parseInt(top.replace('px', '')); // Transforma o valor em inteiro e retira o texto 'px' dele
	}
	// Se o valor enviado para a função for menor que 0 retira o valor
	// 8 para a posição top do elemento. Caso contrário, atribui 8
	top = delta < 0 ? top - 8 : top + 8;
	document.getElementById('marcador').style.top = top + 'px';
}

function wheel(event) {
	var delta = 0;
	if (!event) event = window.event; // Efetuando teste para verificar se o navegador suporta o código
	if (event.wheelDelta) {
		delta = event.wheelDelta / 120;
		if (window.opera) delta = -delta; // Se o navegador for o Opera ou o Chrome modifica o valor de delta para -delta
	} else if (event.detail) { // Se não existir, verifica se a propriedade detail existe
		delta = -event.detail / 3;
	}
	if (delta) handle(delta);
	if (event.preventDefault) event.preventDefault();
	// Para garantir, caso o navegador não aceite preventDefault(), passe false para returnValue para cancelar o evento
	event.returnValue = false;
}

if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel; // Para garantir configura o evento no documento.