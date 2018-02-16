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