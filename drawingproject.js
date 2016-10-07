
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
canvas.fillStyle = "DimGray";
canvas.arc(400, 400, 350, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "Gray";
canvas.arc(400, 400, 320, 0, 2*Math.PI);
canvas.fill();





canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,95);
canvas.lineTo(260,288);
canvas.lineTo(540,288);
canvas.fill();

//left side
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(100,295);
canvas.lineTo(260,285);
canvas.lineTo(240,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,695);
canvas.lineTo(260,285);
canvas.lineTo(240,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(700,295);
canvas.lineTo(260,285);
canvas.lineTo(240,345);
canvas.fill();


//right side
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(700,295);
canvas.lineTo(540,285);
canvas.lineTo(560,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(400,695);
canvas.lineTo(540,285);
canvas.lineTo(560,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(100,295);
canvas.lineTo(540,285);
canvas.lineTo(560,345);
canvas.fill();

//cirlces

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.arc(400, 395, 100, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(400, 395, 80, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.arc(400, 395, 40, 0, 2*Math.PI);
canvas.fill();


//center
canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(280,265);
canvas.lineTo(350,295);
canvas.lineTo(300,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(400,165);
canvas.lineTo(360,285);
canvas.lineTo(440,285);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(520,265);
canvas.lineTo(450,295);
canvas.lineTo(500,340);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(220,565);
canvas.lineTo(450,295);
canvas.lineTo(500,340);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(580,565);
canvas.lineTo(350,295);
canvas.lineTo(300,345);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orangered";
canvas.moveTo(400,745);
canvas.lineTo(360,285);
canvas.lineTo(440,285);
canvas.fill();




//shield



canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(65, 400, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(735, 400, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(400, 65, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(400, 735, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(210, 125, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(590, 125, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(110, 230, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(690, 230, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(210, 675, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(590, 675, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(110, 570, 14, 0, 2*Math.PI);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "DarkGray";
canvas.arc(690, 570, 14, 0, 2*Math.PI);
canvas.fill();
