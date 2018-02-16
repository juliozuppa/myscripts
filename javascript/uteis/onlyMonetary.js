/**
 * Permite apenas números, vírgula e ponto (000.000.000,00)
 * Ideal para o evento keypress de um input por exemplo
 */ 
function onlyMonetary(event) {
    var character = String.fromCharCode(event.keyCode);
    var regex1 = new RegExp(/[\d.,]/);
    if (!regex1.test(character)) {
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false; // caso o navegador não aceite preventDefault
    }
}