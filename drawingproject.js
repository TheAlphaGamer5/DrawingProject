
var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

function drawRectangle(color, xCoord, yCoord) {
  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

  canvas.fillStyle = color;
  canvas.fillRect(xCoord, yCoord, 800, 800);

}
drawRectangle("green", 10, 10);



canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(400, 400, 100, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(400, 400, 70, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.moveTo(75,50);
canvas.lineTo(100,75);
canvas.lineTo(100,25);
canvas.fill();