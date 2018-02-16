

// Padrão Singleton (pode ser uma declaração literal)
// ou com construtor:
function Singleton() {
	if (typeof Singleton.instance === "object") {
		return Singleton.instance;
	}
	this.value = "Teste";
	Singleton.instance = this;
}

var foo = new Singleton();
var bar = new Singleton();
var baz = Singleton.instance;

console.log(foo == bar);
console.log(bar === baz);


// com instance privado:
function Singleton(){
	this.value = "TreinaWeb";
	var instance = this;
	Singleton = function(){
		return instance;
	}
}
var foo = new Singleton();
var bar = new Singleton();
var baz = Singleton.instance;
console.log(foo == bar);
console.log(bar === baz);













var gamepads = new Array(4);
(function () {

	var knownGamepads = new Array(4);
	setInterval(function () {

		for(var index in gamepads) {
			var gamepad = gamepads[index],
				knownGamepad = knownGamepads[index];

			if(gamepad !== undefined && knownGamepad === undefined) {
				knownGamepads[index] = gamepad;
				var newGamepadEvent = document.createEvent('Event');
				newGamepadEvent.initEvent('gamepadConnected', true, true);
				newGamepadEvent.gamepad = gamepad;
				window.dispatchEvent(newGamepadEvent);
			}

			if(gamepad === undefined && knownGamepad !== undefined) {
				knownGamepads[index] = undefined;
				var removeGamepadEvent = document.createEvent('Event');
				removeGamepadEvent.initEvent('gamepadDisconnected', true, true);
				removeGamepadEvent.gamepad = knownGamepad;
				window.dispatchEvent(removeGamepadEvent);
			}
		}

	}, 600);
})();

var playerManagement = {
	players: [],
	addPlayer: function (gamepad) {
		var index = this.players.length;
		for(var i in this.players) {
			if(this.players[i] === undefined) {
				index = parseInt(i);
				break;
			}
		}
		this.players[index] = {
			name: 'Player' + (index + 1),
			gamepad: gamepad
		};
		alert(this.players[index].name + ' entrou no jogo.');
	},
	removePlayer: function (gamepad) {
		var index = this.getPlayerIndex(gamepad);
		alert(this.players[index].name + " saiu do jogo.");
		this.players[i] = undefined;
	},
	getPlayerIndex: function (gamepad) {
		for(var index in this.players) {
			var player = this.players[index];
			if(player !== undefined){
				if(gamepad === player.gamepad){
					return index;
				}
			}
		}
	},
	init: function () {
		var that = this;
		var onGamepadConnected = function (event) {
			that.addPlayer(event.gamepad);
		};
		var onGamepadDisconnected = function (event) {
			that.removePlayer(event.gamepad);
		};

		window.addEventListener('gamepadConnected', onGamepadConnected);
		window.addEventListener('gamepadDisconnected', onGamepadDisconnected);

	}
};

playerManagement.init();

// no console do navegador, inserir, por exemplo:
// gamepads[0] = {name:"gamepad1"};
// gamepads[1] = {name:"gamepad2"};
// gamepads[2] = {name:"gamepad3"};
// para adicionar, exibirá mensagem
// e para remover, exemplo:
// gamepads[1] = undefined;