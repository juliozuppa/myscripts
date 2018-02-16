/**
 * Testa se o valor está no formato 000.000.000,00
 * @param value
 * @return {boolean}
 */
function isMonetary(value) {
    var regex = new RegExp(/^\d+((\d{0,3}(\.\d(\d{0,2}))+)?,\d+)?$/);
    return regex.test(value);
}