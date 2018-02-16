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

// util para exemplos:
function writeLn(str) {
    document.write(str + '<br>');
}

// examples
writeLn(toDateJs('04/12/1981', 'd/m/y'));
writeLn(toDateJs('15-01-1981', 'd-m-y'));
writeLn(toDateJs('15-01-1981 12:54', 'd-m-y h:i'));
writeLn(toDateJs('15-01-1981 12:54:36', 'd-m-y h:i:s'));