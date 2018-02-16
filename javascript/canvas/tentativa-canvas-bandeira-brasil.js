var canvas = document.createElement('canvas');
canvas.width = 900;
canvas.height = 600;
canvas.style = 'border: 1px solid #00A859; background-color:#00A859';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = '#FFCC29';
ctx.fillStyle = '#FFCC29';
ctx.moveTo(450, 530);
ctx.lineTo(100, 300);
ctx.lineTo(450, 70);
ctx.lineTo(800, 300);
ctx.lineTo(450, 530);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = '#3E4095';
ctx.fillStyle = '#3E4095';
ctx.arc(450, 300, 150, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = '#FFFFFF';
ctx.fillStyle = '#FFFFFF';
ctx.moveTo(305, 260);
ctx.bezierCurveTo(360, 265, 450, 250, 592, 350);
ctx.bezierCurveTo(596, 338, 597, 330, 598, 325);
ctx.bezierCurveTo(479, 238, 414, 238, 313, 236);
ctx.bezierCurveTo(304, 260, 305, 258, 305, 261);
ctx.stroke();
ctx.fill();

var str = 'ORDEM E PROGRESSO';
ctx.beginPath();
ctx.fillStyle = '#00A859';
ctx.font = '19px Arial Black';
var x = 318;
var y = 253;
var i = 0;
var f = .003;
while (i < str.length) {
    ctx.fillText(str[i], x, y);
    var rot = Math.PI * f;
    f += .0001;
    ctx.rotate(rot);
    x +=19;
    y -= 2;
    i++;
}