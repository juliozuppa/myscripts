// var x let (escopo de bloco/variável local)
// let ECMAS6
var x = 45;
if(true) {
    let x = 10;
    console.log(x); // 10
}
console.log(x); // 45

var x = 45;
if(true) {
    var x = 10;
    console.log(x); // 10
}
console.log(x); // 10

// Classe/Objeto -> construtor
// poderia ser: var Curso = function Curso(nome, criado) {...};
// this dentro da função, nesse contexto, é o objeto global window
function Curso(nome, criado) { // ou poderia ser também = function(nome, criado)
	// A palavra-chave this é responsável por iniciar o objeto adequadamente
	this.nome = nome; // definindo uma propriedade assim ou this['nome']
	this['criado-por'] = criado; // propriedade de nome composto
	this.getCursoNome = function() { // declaração de um método (são funções invocadas por objetos)
		return this.nome + ' - ' +  this['criado-por'];
	};
	this.xpto = nome || ''; // valor padrão
	/*
	o problema de declarar o método aqui é que ele é recriado a cada instância
	então pode-se desclarar assim (fora da function):
	Curso.prototype.getCursoNome = function () {
		return this.nome + ' - ' +  this['criado-por'];
	} 
	*/
	
};
var curso  =  new Curso('Curso JS', 'Julio'); // instanciação de uma classe
console.log(curso); // Curso {nome: "Curso JS", criado-por: "Julio"}
console.log(curso.getCursoNome()); // Curso JS - Julio
// Javascript permite que propriedades sejam adicionadas posteriormente a qualquer momento

// ECMAScript 2015 (ES6)
class Curso {
	constructor(nome, criado){
		this.nome = nome;
		this['criado-por'] = criado;
	}
	getCursoNome() {
		return this.nome + ' - ' +  this['criado-por'];
	};
}
var curso  =  new Curso('Curso JS', 'Julio');
console.log(curso); // Curso {nome: "Curso JS", criado-por: "Julio"}
console.log(curso.getCursoNome()); // Curso JS - Julio







// namespace
// Objeto Literal definindo namespace
var blog = {};
// Construtor para Artigo utilizando o namespace blog
blog.Artigo = function (titulo) {
	this.titulo = titulo;
};
var artigo = new blog.Artigo('Mais um artigo sobre JavaScript');
console.log(artigo); // blog.Artigo {titulo: "Mais um artigo sobre JavaScript"}








// métodos e atributos privados (var ao invés de this.)
function Categoria(nome) {
	var totalProdutos = 0; // atributo privado
	var atualizaTotalProdutos = function() { // método privado
		totalProdutos++;
	};
	atualizaTotalProdutos();
	this.nome = nome;
	this.total = totalProdutos;
}
var categoria = new Categoria('Teste1');
console.log(categoria); // Categoria {nome: "Teste1", total: 1}









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










// heranças através de prototype
// definindo uma classe
function Pai(nome) {
	this.nome = nome;
	this.digaSeuNome = function () {
		return this.nome;
	}
}
function Filho(nome) {
	this.nome = nome;
}
// definindo que Filho herda Pai
Filho.prototype = new Pai();
var filho = new Filho('Fred');
// filho herda o método do pai
console.log(filho.digaSeuNome());
// o constructor também é herdado da superclasse a não ser que especifique
Filho.prototype.constructor = Filho;








// operador instanceof
function Veiculo(){}
function Carro(){}
// definindo que Carro herda Veículo
Carro.prototype = new Veiculo();
var gol = new Carro();
console.log(gol instanceof  Carro); // true
console.log(gol instanceof  Veiculo); // true







// adicionar e remover atributo posteriormente a declaração
var curso = {
	nome: 'Javascript',
	alunos: ['Andre', 'Joao'],
	getAlunos: function() {
		for(var index in this.alunos) {
			console.log(this.alunos[index]);
		}
	}
}; // declaração JSON Javascript Object Notation
curso.getAlunos();
// adicionando atributo
curso.ativo = true;
console.log(curso); // Object {nome: "Javascript", alunos: Array[2], ativo: true}
// checando se o objeto contém um atributo (hasOwnProperty)
console.log(curso.hasOwnProperty('ativo')); // true
// deletanto
delete curso.ativo;
console.log(curso);  // Object {nome: "Javascript", alunos: Array[2]}
console.log(curso.hasOwnProperty('ativo')); // false
// listando todas as chaves de um objeto
for(var chave in curso) {
	console.log(chave);
}
// listando os valores de todas as chaves de um objeto
for(var chave in curso) {
	console.log(curso[chave]);
}








// Strings
var nome = 'Julio Cesar';
console.log(nome.charAt(3)); // i
nome = nome.concat(' Zuppa Araujo Zuppa'); // concatenação
console.log(nome); // do inicio para o fim busca a primeira ocorrência da string
console.log(nome.indexOf('Zuppa')); // R:12 - a partir do inicio busca a primeira ocorrência da string / Retorna -1 se não encontrar
console.log(nome.lastIndexOf('Zuppa')); // R:25 - a partir do fim para o início / Retorna -1 se não encontrar
console.log(nome.match(new RegExp('Zuppa'))); // R: ["Zuppa", index: 12, input: "Julio Cesar Zuppa Araujo Zuppa"] / retorn a array ou null se não encontrar
// substituição
console.log(nome.replace('Zuppa', 'Teste')); // R: Julio Cesar Teste Araujo Zuppa (substitui a primeira ocorrencia)
console.log(nome.replace(new RegExp('Zuppa', 'g'), 'Teste')); // R: Julio Cesar Teste Araujo Teste (substitui todas as ocorrencias)
// extrair porção da string
console.log(nome.slice(6, 11)); // R: Cesar
console.log(nome.slice(-5)); // R: Zuppa
nome = nome.slice(0, -6);
console.log(nome); // R: Julio Cesar Zuppa Araujo
// dividir string
console.log(nome.split(' ')); // R: ["Julio", "Cesar", "Zuppa", "Araujo"]
// case
console.log(nome.toLowerCase()); // R: julio cesar zuppa araujo
console.log(nome.toUpperCase()); // R: JULIO CESAR ZUPPA ARAUJO









// métodos do navegador p/Strings
document.write('String test' + '<br>');
document.write('String Test'.big() + '<br>');
document.write('String Test'.small() + '<br>');
document.write('String Test'.bold() + '<br>');
document.write('String Test'.link('http://google.com.br') + '<br>');
document.write('String Test'.fontcolor('#c3c3c3') + '<br>');
document.write('String Test'.fontsize(5) + '<br>');







var niver = new Date('01/22/1994'); // mes/dia/ano
console.log(niver); // Sat Jan 22 1994 00:00:00 GMT-0200 (Horário brasileiro de verão)

niver = new Date('01/22/1994 15:23:35'); // mes/dia/ano
console.log(niver); // Sat Jan 22 1994 15:23:35 GMT-0200 (Horário brasileiro de verão)

niver = new Date('22 JAN 1994');
console.log(niver); // Sat Jan 22 1994 00:00:00 GMT-0200 (Horário brasileiro de verão)

// 0 = JAN, 1 = FEV ...
niver = new Date(1994, 0, 22, 15, 23, 35);
console.log(niver); // Sat Jan 22 1994 15:23:35 GMT-0200 (Horário brasileiro de verão)

var hoje = new Date();
console.log([hoje.getDate(), (hoje.getMonth() + 1), hoje.getFullYear()].join('/'));
console.log([hoje.getHours(), hoje.getMinutes(), hoje.getSeconds()].join(':'))

var arrDiasSemana = ['Domingo', 'Segunda', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
console.log(arrDiasSemana[hoje.getDay()]);

// comparação
var data1 = new Date('02/26/2012');
var data2 = new Date('02/26/2012');
console.log(data1 == data2); // false
// forma correta para se comparar (requer milisegundos):
console.log(data1.getTime() === data2.getTime() ); // true
// ou:
console.log(+data1 === +data2 ); // true
// porém >= ou <= não precisa converter em milissegundos
console.log(data1 >= data2); // true
data2.setDate(27); // mudando a segunda data com dia maior agora
console.log(data1 >= data2); // false











// Funções Math
Math.floor(x); // arredonda para baixo
Math.floor(4.7);    // returns 4

Math.ceil(x); // arredonda para cima
Math.ceil(4.4);     // returns 5

Math.round(x); // arredonda >.5 para cima <.5 para baixo
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

Math.pow(); // potência
Math.pow(8, 2);      // returns 64

Math.sqrt(), // raiz quadrada
Math.sqrt(64);      // returns 8

Math.abs(-4.7);     // returns 4.7

// returns a random number between 0 (inclusive),  and 1 (exclusive)
Math.random() * arr.length; // valor aleatorio dentro do range multiplicador

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)

// menor valor na lista
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
// maior valor na lista
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

// Constantes
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E















