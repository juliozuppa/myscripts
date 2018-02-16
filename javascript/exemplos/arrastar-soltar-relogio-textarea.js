/*<style> span#relogio { font: bold 24pt sans-serif; background: #ddf; padding: 10px; border: solid black 2px; border-radius: 10px; } </style>
<span id="relogio"></span>
<textarea cols="40" rows="20"></textarea>*/

var relogio = document.getElementById("relogio");
function exibeHora() {
    var agora = new Date();
    var hrs = agora.getHours(), mins = agora.getMinutes();
    if (mins < 10) mins = "0" + mins;
    relogio.innerHTML = hrs + ":" + mins;
    setTimeout(exibeHora, 6000);
}
exibeHora();
relogio.draggable = true; // ou <span draggable="true">
relogio.ondragstart = function (event) {
    var event = event || window.event; // Para compatibilidade com IE
    var dt = event.dataTransfer;
    dt.setData("Text", Date() + "\n");
};