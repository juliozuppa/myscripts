var hoje = new Date(); // data atual
var niver = new Date('12/04/' + hoje.getFullYear()); // meu aniversário
var dif = (niver - hoje); // diferença em milissegundos
var difDias = Math.round(dif/1000/60/60/24); // dias = milissegundos(1000)/segundos(60)/minutos(60)/horas(24)