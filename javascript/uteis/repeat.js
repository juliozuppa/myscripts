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