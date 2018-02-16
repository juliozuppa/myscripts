function writeLn(str) {
    document.write(str + '<br>');
}

/**
 * Formata uma determinada data no padrão do objeto Date() que é o mês antes do dia (m/d/y)
 * @param {string} strFullDate - a data no formato que desejar
 * @param {string} strFormat - o formato da data que informou (d=day, m=month, y=year, h=hour, i=minutes, s=seconds)
 * @returns {string} - a string no formato do javascprit (m/d/y h:i:s)
 */
function toDateJs(strFullDate, strFormat) {
    var regex1 = new RegExp('\/|\-|\:', 'g');
    var regex0 = new RegExp(' ', 'g');
    var arrDate = strFullDate.replace(regex0, '-').split(regex1);
    var arrFormat = strFormat.replace(regex0, '-').split(regex1);
    var retorno = (arrFormat.indexOf('m') != -1) ? arrDate[arrFormat.indexOf('m')] : '';
    retorno += (arrFormat.indexOf('d') != -1) ? '/' + arrDate[arrFormat.indexOf('d')] : '';
    retorno += (arrFormat.indexOf('y') != -1) ? '/' + arrDate[arrFormat.indexOf('y')] : '';
    retorno += (arrFormat.indexOf('h') != -1) ? ' ' + arrDate[arrFormat.indexOf('h')] : '';
    retorno += (arrFormat.indexOf('i') != -1) ? ':' + arrDate[arrFormat.indexOf('i')] : '';
    retorno += (arrFormat.indexOf('s') != -1) ? ':' + arrDate[arrFormat.indexOf('s')] : '';
    return retorno;
}

/**
 * Retorna a quantidade de dias que faltam para uma data
 * informada no parâmetro objDate
 * @param {Date} objDate
 * @returns {number}
 */
function daysToDate(objDate) {
    var hoje = new Date(); // data atual
    var niverCalc = new Date(hoje); // a partir da data atual
    niverCalc.setDate(objDate.getDate()); // define o dia do objDate
    niverCalc.setMonth(objDate.getMonth()); // define o mes do objDate
    var jaFoi = (hoje > niverCalc); // testa se a data objDate já ocorreu esse ano
    niverCalc.setFullYear(jaFoi ? (hoje.getFullYear() + 1) : hoje.getFullYear()); // caso já tenha ocorrido, incrementar 1 ano
    var dif = Math.abs(hoje.getTime() - niverCalc.getTime()); // módulo da subtração em milissegundos
    return Math.round((dif)/1000/60/60/24); // dias = milissegundos(1000)/segundos(60)/minutos(60)/horas(24)
}

var niver = new Date(toDateJs('03/04/1981', 'd/m/y')); // data do aniversário
var difDias = daysToDate(niver);
writeLn((difDias > 0) ? ('Faltam ' + difDias + ' dias para seu aniversário!') : ('Feliz Aniversário!'));