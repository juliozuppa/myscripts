// atributo estático
var Pessoa = (function() {
	var count = 0; // atributo estático
	// método privado
	var doCount = function() { count++; }
	function Pessoa(pNome) {
		var nome = pNome;
		// apenas métodos gets e sets
		this.setNome = function(val) { nome = val; }
		this.getNome = function() { return nome; }
		doCount.call(this);
	}
	// métodos público
	Pessoa.prototype = {
		constructor: Pessoa,
		getCount: function() {
			return count;
		}
	};
	return Pessoa;
})();

var pessoa1 = new Pessoa('Julio');
console.log(pessoa1.getNome()); // Julio
console.log(pessoa1.getCount()); // 1
var pessoa2 = new Pessoa('Maria');
console.log(pessoa2.getNome()); // Maria
console.log(pessoa2.getCount()); // 2
var pessoa3 = new Pessoa();
pessoa3.setNome('José');
console.log(pessoa3.getNome()); // José
console.log(pessoa3.getCount()); // 3
console.log(pessoa1.getCount()); // 3
console.log(pessoa2.getCount()); // 3