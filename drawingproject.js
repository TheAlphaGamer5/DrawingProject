
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

function drawRectangle(color, xCoord, yCoord) {
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

  canvas.fillStyle = color;
  canvas.fillRect(xCoord, yCoord, 800, 800);

}
//background
drawRectangle("", 10, 10);

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,100);
canvas.lineTo(260,293);
canvas.lineTo(540,293);
canvas.fill();

//left side
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(100,300);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,700);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(700,300);
canvas.lineTo(260,290);
canvas.lineTo(240,350);
canvas.fill();


//right side
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(700,300);
canvas.lineTo(540,290);
canvas.lineTo(560,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,700);
canvas.lineTo(540,290);
canvas.lineTo(560,350);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(100,300);
canvas.lineTo(540,290);
canvas.lineTo(560,350);
canvas.fill();

//cirlces

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


//center
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
