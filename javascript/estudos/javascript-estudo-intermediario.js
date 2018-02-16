// para propriedades não poderem ser deletadas
var objeto = {};
Object.defineProperty(objeto, propertyName,{
	configurable: false, // define se a propriedade poderá ser alterada ou deletada
	value: 'xpto', // o valor da propriedade
	writable: false // define se o valor poderá ser alterado
	// enumerable: true|false define se é listada nas propriedades do objeto
	// set: define uma função que atribui valor a propriedade
	// get: define uma função que retorna o valor a propriedade
});








// instanceof
var Pessoa = function(idade){
  this.idade = idade;
}
var cleber = new Pessoa(25)
console.log(cleber instanceof Pessoa); //Retorna true
console.log(cleber instanceof Object); // Retorna true






// herança
meuObjeto.prototype = new Object(); // todo objeto herda Object

// adicionando um método que será herdado por todos os objetos:
Object.prototype.qualCurso = function(){
  return 'Curso Teste';
}

var objLiteral = {};
var empresa = new String('Test');

console.log(objLiteral.qualCurso()); // Curso Teste
console.log(empresa.qualCurso()); // Curso Teste






// 9 construtores do core do javascript
Number();
String();
Boolean();
Object();
Array();
Function();
Date();
RegExp();
Error();







// outra forma de definir uma função
var soma = new Function(['a','b'], 'return a+b;');
soma(1,2);











// propriedade constructor
var Carro = function (){
  this.cor = 'branco';
}
var carro = new Carro();
console.log(carro.constructor); // function (){ this.cor = 'branco'; }
// copia do construtor
var CopiaDoConstrutor = carro.constructor;
var carro2 = new CopiaDoConstrutor();
console.log(carro2 instanceof Carro); // true
// construtor de um obj JSON
var JSON = {}
console.log(JSON.constructor); // function Object() { [native code] }

var carro = { cor:'branco' }; // quando se cria objeto com JSON
// a referência de constructor passa a ser Object (um objeto vazio sem as propriedades definidas no JSON)
var Carro = carro.constructor; 
var carro2 = new Carro();
console.log(Carro === Object); // true
console.log(carro2); // Object {}
console.log(carro2.cor); // undefined
// é o mesmo que:
var Carro = Object;
var carro = new Carro();
console.log(carro); // Object {}






// + constructor
var Carro = function Carro(cor) { this.cor = cor; }
var carro = new Carro('Branco');
var carro1 = new carro.constructor('Preto');
console.log(carro); // Carro {cor: "Branco"}
console.log(carro1); // Carro {cor: "Preto"}
// atributos criados posteriormente  não será propagado 
// para as outras instancias:
carro.nome = 'Gol'; 
var carro2 = new carro.constructor('Preto'); // porque não está no construtor
console.log(carro); // Carro {cor: "Branco", nome: "Gol"}
console.log(carro2); // Carro {cor: "Preto"}

var livro = { nome: 'Clean Code' }; // não cria construtor
var livro1 = new livro.constructor(); // por isso aqui o construtor é de Object, portanto sem a propriedade nome
console.log(livro); // Object {nome: "Clean Code"}
console.log(livro1); // Object {}













// Cadeia de herança
// protótipo com JSON __proto__ (navegadores apenas/não nativo do javascript)
var habilidades = { // obj habilidade
  falar: function(fala){
    console.log(fala);
  }
}
var humano = { // obj humano
  __proto__: habilidades // herdando a habilidade de falar
}
humano.falar('Oii...');


// outra forma de fazer isso:
var habilidades = { // obj habilidade
  falar: function(fala){ 
    console.log(fala);
  }
}
var humano = {}; // obj humano
humano.__proto__ = habilidades; // herdando a habilidade de falar
humano.falar('Oii...');




// descobrir o protótipo de um objeto:
Object.getPrototypeOf(humano);




// Object.create() - Outra forma de se criar um objeto
var a = Object.create(null); // passando protótipo nenhum não irá herdar Object
var obj = Object.create(Object.prototype);
console.log(obj.toString()); // [object Object]
//console.log(a.toString()); // Uncaught TypeError: a.toString is not a function
var habilidades = {
	falar: function(fala){
		console.log(fala);
	}
}
var humano = Object.create(habilidades, {nome:{value:'Andre'}});
humano.falar('Oii... meu nome e '+ humano.nome); // Oii... meu nome e Andre





// Prototype lookup (se não tiver a implementação no objeto irá buscar no prototipo)
var habilidades = { // obj habilidade
  falar: function(fala){
    console.log(fala); // aqui usa console.log()
  }
}
var humano = { // obj humano
  __proto__: habilidades // herdar a habilidade de falar
}
habilidades.falar = function(fala){ // redefinição da propriedade falar
  alert(fala); // aqui altera para alert()
}
// todas as instâncias irão sofrer a mesma mudança
humano.falar('Oii...'); // o resultado será em alert()









// Function
var somar1 = new Function('a', 'b', 'return a + b');
var somar2 = function(a,b){
  return a + b;
}
// return
var somar2 = function(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return;
  }
  return a + b;
}

// callbacks - passagem de funções entre funções
var bar = function(){
  return 'TreinaWeb';
}
var foo = function(callback){
  console.log(callback());
}
foo(bar);


// escopo
// escopos internos têm acesso aos escopos mais altos
// a busca inicia pelo escopo local
// Head Object - escopo mais alto do javascript (objeto window)


// this
// referencia apenas à instância do objeto e não ao objeto('classe')
// this não refere-se ao escopo do objeto, mas à ultima instância do escopo
// exemplo:
var foo = function (){
  console.log(this);
  this.abelha = 'Zzzzz...';
  var bar = function(){
    console.log(this);
    this.urso = 'Uuuurrr...';
  }
  bar(); // 2x Window {stop: function, open: function, alert: function, confirm: function, prompt: function…}
  // aqui this é o window porque não foi criado uma instância de foo
  // é preciso ser uma instância(seja com new ou json) para this referencia o objeto
}
foo();
// por isso usa-se this nos construtores (this.quemSouEu):
var Pessoa = function(){
	this.quemSouEu = function(){
		console.log(this);
	}
}
var alfredo = new Pessoa();
alfredo.quemSouEu(); // Pessoa {quemSouEu: function}

// self/that
// aqui apesar de passar uma instância de Pessoa
// chama-se o quemSouEu de dentro do escopo falsificarIdentidade
// por isso this "não pegara" o contexto de Pessoa
var falsificarIdentidade = function(callback){
  callback();
}
var Pessoa = function(){
  this.quemSouEu = function(){
    console.log(this);
  }
}
var alfredo = new Pessoa();
falsificarIdentidade(alfredo.quemSouEu); // window
// para que se consiga pegar o contexto de pessoa pode-se fazer:
var Pessoa = function(){
  var that = this; // that ou self
  this.quemSouEu = function(){
    console.log(that);
  }
}
var alfredo = new Pessoa(); // no momento da instanciação o contexto fica armazenado em that
falsificarIdentidade(alfredo.quemSouEu); // Pessoa









// Call e Apply (diferem na passagem de argumentos apenas)
// para definir qual será a referência para this
// exemplo:
var nome = 'global';
var idade = 0;
var tamanho = 0;
var peso = 0;
var pessoa1 = { nome:'bruno', idade: 21, tamanho: 1.75, peso: 54 }
var pessoa2 = { nome:'thiago', idade: 24, tamanho: 1.70, peso: 70 }
var descobrirCaracteristicas = function(){
	console.log('nome: '+this.nome + ', idade: '+this.idade + ', tamanho: '+this.tamanho + ', peso: '+this.peso);
}
descobrirCaracteristicas(); // nome: global, idade: 0, tamanho: 0, peso: 0
descobrirCaracteristicas.call(pessoa1); // nome:'bruno', idade: 21, tamanho: 1.75, peso: 54
descobrirCaracteristicas.apply(pessoa2); // nome:'thiago', idade: 24, tamanho: 1.70, peso: 70
// outro exemplo para visualizar a diferença entre call e apply
var empresa = { nome:'Teste' }
var descreverEmpresa = function(cursos, qualidade){
  console.log(this.nome);
  for (var i=0; i<cursos.length; i++){
    console.log(cursos[i]);
  }
  console.log(qualidade);
}
descreverEmpresa.call(empresa,['JavaScript','C#','Java','PHP','Entre Outros'],'100% confiavel');
descreverEmpresa.apply(empresa,[['JavaScript','C#','Java','PHP','Entre Outros'],'100% confiavel']);




var foo = function(){
	var arg = Array.prototype.filter.call(arguments, function(valor){
		return valor === 'Teste';
	});
	console.log(arg);
}
foo('Teste','Argumento2','Argumento3'); // [Teste]







// Funções anônimas
(function(){
  //lógica da funcao aqui
})(/*passa parâmetros*/)
// Exemplo:
(function(nome){
  console.log(nome);
})('Teste');

// definir o this dentro da função:
(function(){
  console.log(this.nome);
}).call({nome:'Teste'}); // Imprime Teste












// regex
var regex = /^(\w+[._-]?)+@\w+.(\w+[.]?)+$/;
var string = 'contato@teste.com';
console.log(regex.test(string));







// sessionStorage e localStorage
localStorage.setItem('nome', 'Julio');
localStorage.removeItem('nome');
// armazena apenas strings
// pode se JSON.strigify() para armazenar objetos
sessionStorage.setItem('obj', JSON.stringify({
nome: 'Julio Cesar Zuppa'
}));
// para recuperar:
var obj = JSON.parse(sessionStorage.getItem('obj'));
console.log(obj);
// listar os items:
sessionStorage.setItem('nome', 'Julio Cesar Zuppa Araujo');
sessionStorage.setItem('idade', '35');
for(var i=0; i<sessionStorage.length; i++) {
var item = sessionStorage.key(i);
console.log(item + ' = ' + sessionStorage.getItem(item));
}
// limpar todos os item
sessionStorage.clear();










// Cookies
// checar se o navegador aceita cookies
console.log(navigator.cookieEnabled);

//document.cookie="nome=Teste";
console.log(document.cookie); // nome=Teste

// data de expiração
document.cookie="nome=Teste; expires=Thu, 18 Dec 2017 12:00:00 UTC";
console.log(document.cookie);

// para deletar - informar uma data que já passou
document.cookie="nome=Teste; expires=Thu, 18 Dec 2000 12:00:00 UTC";
console.log(document.cookie);








// Canvas
// cor:
// ctx.fillStyle = '#27408B';

// criação de um retangulo:
// fillRect(posiLeft, posiTop,largura, altura)

// furo no retangulo
// clearRect(posiLeft, posiTop,largura, altura);

// escrever texto:
// fillText('TesteTeste', 20, 40); (posiLeft, posiTop,

function canvas1() {
	var canvas = document.createElement('canvas');
	canvas.id = 'desenho1';
	canvas.style = 'border:1px solid #000000';
	canvas.width = '600';
	canvas.height = '300';
	document.body.appendChild(canvas);

	var ctx = canvas.getContext('2d');

	ctx.fillStyle = 'Blue';
	ctx.fillRect(20, 20, 100, 120);

	//segundo andar
	ctx.clearRect(30, 30, 20, 20);
	ctx.clearRect(60, 30, 20, 20);
	ctx.clearRect(90, 30, 20, 20);

	//primeiro andar
	ctx.clearRect(30, 70, 20, 20);
	ctx.clearRect(60, 70, 20, 20);
	ctx.clearRect(90, 70, 20, 20);

	//porta
	ctx.clearRect(55, 110, 30, 30);
}

function canvas2() {
	var canvas = document.createElement('canvas');
	canvas.id = 'desenho2';
	canvas.style = 'border:1px solid #000000';
	canvas.width = '600';
	canvas.height = '300';
	document.body.appendChild(canvas);

	var ctx = canvas.getContext('2d');

	// criação gradiente
	var gradient = ctx.createLinearGradient(0, 0, parseInt(canvas.width), 0);
	// Add colors
	gradient.addColorStop(0.000, 'rgba(10, 0, 178, 1.000)');
	gradient.addColorStop(0.500, 'rgba(255, 0, 0, 1.000)');
	gradient.addColorStop(1.000, 'rgba(255, 252, 0, 1.000)');
	ctx.fillStyle = gradient;
	ctx.font = "60px Consolas";

	ctx.fillText('TesteTeste', 18, 80);
}

canvas1();
canvas2();









var canvas = document.createElement('canvas');
canvas.setAttribute('id', 'desenho');
canvas.setAttribute('style', 'border: 1px solid black;');
canvas.setAttribute('width', '600');
canvas.setAttribute('height', '400');
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');

// retangulo1
ctx.beginPath();
ctx.strokeStyle = '#34af56'; // cor de contorno
ctx.fillStyle = '#C0FF3E'; // cor de preenchimento
ctx.rect(100, 100, 200, 100); // cria um retangulo
ctx.lineWidth = 5;
ctx.stroke(); // inclui o contorno no desenho
ctx.fill(); // inclui o preenchimento

// retangulo2
ctx.beginPath();
ctx.strokeStyle = '#8B1A1A'; // cor de contorno
ctx.fillStyle = '#FF4040'; // cor de preenchimento
ctx.rect(100, 210, 200, 100); // cria um retangulo
ctx.lineWidth = 5;
ctx.stroke(); // inclui o contorno no desenho
ctx.fill(); // inclui o preenchimento

// abreviado não precisa do beginPath
ctx.fillStyle = '#8B008B';
ctx.strokeStyle = '#551A8B';
ctx.fillRect(320, 100, 200, 100);
ctx.lineWidth = 3;
ctx.strokeRect(320, 100, 200, 100);

// criar um arco
ctx.beginPath();
ctx.strokeStyle = '#FF0000'; // cor de contorno
ctx.fillStyle = '#34af56'; // cor de preenchimento
// angulos devem ser em radianos:
ctx.arc(380, 260, 50, 0, Math.PI, true); // context.arc(x,y,r,sAngle,eAngle,counterclockwise);
console.log(2*Math.PI);
ctx.stroke();
ctx.fill();

// textos
ctx.beginPath();
ctx.font = '30px arial black';
ctx.fillStyle = 'DarkBlue';
ctx.fillText('Testes Com Canvas', 120, 50);

// linhas
ctx.beginPath();
ctx.moveTo(120, 60);
ctx.lineTo(445, 60);
ctx.stroke();







