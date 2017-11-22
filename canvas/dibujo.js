var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var xi, yi, xf, yf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++){
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, ancho);

    xi = xf;
    yf = ancho - yi;
    //dibujarLinea(colorcito, xi, 0, 0, yf);
  }

  dibujarLinea(colorcito, 1, 1, 1, ancho - 1);
  dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);
  dibujarLinea(colorcito, ancho - 1, ancho - 1, ancho - 1, 1);
  dibujarLinea(colorcito, ancho - 1, 1, 1, 1);
}
