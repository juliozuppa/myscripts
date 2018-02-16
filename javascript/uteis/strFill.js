/**
 * Repete a string informada no parâmetro str
 * a quantidade de vezes informada no parâmetro num
 * @param {string} str - a String a ser repetida
 * @param {int} num - o número de vezes a repetir
 * @returns {string}
 */
function repeat(str, num) {
    var arr = [], i = 0;
    while (i < num) { arr[i++] = str; }
    return arr.join('');
}

/**
 * Preenche uma determinada string 'orig'
 * com outra determinada string definida em 'fill' (default é zero '0')
 * até que atinja o tamanho definido em 'size'. (default é o tamanho da string orig +1)
 * A direção do preenchimento é definido em 'side' que pode ser:
 * 'left', 'right' e 'middle' (esquerda, direita e meio)
 * @param {string} orig - a string original
 * @param {int} [size=lenght+1] size - o tamanho final desejado
 * @param {string} [side='left'|side='right'|side='middle'] side - a direção do preenchimento
 * @param {string} [fill='0'] fill - a string de preenchimento
 * @returns {string}
 */
function strFill(orig, size, side, fill) {
    fill = fill || '0';
    side = side || 'left';
    orig = orig.toString();
    var len = orig.length;
    size = size || (len + 1);
    var count = (size - len);
    switch (side) {
        case 'left': return repeat(fill, count) + orig;
        case 'right': return orig + repeat(fill, count);
        case 'middle':
            var part = Math.floor(count / 2);
            var f = repeat(fill, part);
            return (count % 2 > 0 ? fill : '') + f + orig + f;
        default: return repeat(fill, count) + orig;
    }
}

var test0 = strFill('5067', 8);
console.log(test0); // 00005067
console.log(test0.length); // 8

var test1 = strFill('135', 20, 'middle', '+');
console.log(test1); // +++++++++135++++++++
console.log(test1.length); // 20

var test2 = strFill('19', 20, 'middle', '#');
console.log(test2); // #########19#########
console.log(test2.length); // 20

var test3 = strFill('65432', 20, 'middle', ' ');
console.log(test3); //         65432
console.log(test3.length); // 20

var test4 = strFill('2030', 12, 'right', '*');
console.log(test4); // 2030********
console.log(test4.length); // 12