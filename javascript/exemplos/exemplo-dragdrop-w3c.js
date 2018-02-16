/*
<style> #div1 { width: 350px;  height: 70px; padding: 10px; border: 1px solid #aaaaaa; } </style>
<div id="div1"></div><br>
<img id="drag1" src="https://www.w3schools.com/html/img_logo.gif" width="336" height="69">
*/

function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}

var img = document.getElementById('drag1');
img.draggable = true;
img.addEventListener('dragstart', drag);

var div = document.getElementById('div1');
div.addEventListener('dragover', allowDrop);
div.addEventListener('drop', drop);
