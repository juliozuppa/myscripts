var canvas = document.createElement('canvas');
canvas.width = 900;
canvas.height = 600;
canvas.style = 'border: 1px solid black';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
ctx.beginPath();

var x = 1;
ctx.moveTo(450/x, 450/x);
ctx.lineTo(240/x, 580/x);
ctx.lineTo(320/x, 350/x);
ctx.lineTo(130/x, 230/x);
ctx.lineTo(380/x, 220/x);
ctx.lineTo(460/x, 10/x);
ctx.lineTo(540/x, 220/x);
ctx.lineTo(790/x, 230/x);
ctx.lineTo(580/x, 350/x);
ctx.lineTo(660/x, 580/x);
ctx.lineTo(450/x, 450/x);
ctx.stroke();
ctx.fill();