var areaDeDibujo = document.getElementById("area_de_dibujo");
var lienzo = areaDeDibujo.getContext("2d");

var widthArea = areaDeDibujo.width;
var heightArea = areaDeDibujo.height;

var pointTemp = {
  xi: 0,
  yi: 0,
  xf: 0,
  yf: 0
};

dibujarLinea("blue", 0, 0, widthArea, 0, lienzo);
dibujarLinea("blue", widthArea, 0, widthArea, heightArea, lienzo);
dibujarLinea("blue", widthArea, 300, 0, heightArea, lienzo);
dibujarLinea("blue", 0, heightArea, 0, 0, lienzo);

areaDeDibujo.addEventListener("mousedown", puntearInicio);
areaDeDibujo.addEventListener("mouseup", puntearFin);

function dibujarLinea(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function puntearInicio(sender){
  console.log(sender);
  pointTemp.xi = sender.offsetX;
  pointTemp.yi = sender.offsetY;
}

function puntearFin(sender){
  pointTemp.xf = sender.offsetX;
  pointTemp.yf = sender.offsetY;

  dibujarLinea("red", pointTemp.xi, pointTemp.yi, pointTemp.xf, pointTemp.yf, lienzo);

  pointTemp.xi = 0;
  pointTemp.yi = 0;
  pointTemp.xf = 0;
  pointTemp.yf = 0;
}
