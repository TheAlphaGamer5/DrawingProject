
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

function drawRectangle(color, xCoord, yCoord) {
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

  canvas.fillStyle = color;
  canvas.fillRect(xCoord, yCoord, 800, 800);

}
drawRectangle("", 10, 10);

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(100,300);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(400,700);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(700,300);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(100,300);
canvas.lineTo(660,290);
canvas.lineTo(640,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(700,300);
canvas.lineTo(560,290);
canvas.lineTo(540,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.moveTo(400,700);
canvas.lineTo(620,290);
canvas.lineTo(640,350);
canvas.fill();



canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.arc(400, 400, 100, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(400, 400, 80, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.arc(400, 400, 40, 0, 2*Math.PI);
canvas.fill();









canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(280,270);
canvas.lineTo(350,300);
canvas.lineTo(300,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(400,170);
canvas.lineTo(360,290);
canvas.lineTo(440,290);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(520,270);
canvas.lineTo(450,300);
canvas.lineTo(500,345);
canvas.fill();






canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(220,570);
canvas.lineTo(450,300);
canvas.lineTo(500,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(580,570);
canvas.lineTo(350,300);
canvas.lineTo(300,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(400,770);
canvas.lineTo(360,290);
canvas.lineTo(440,290);
canvas.fill();
