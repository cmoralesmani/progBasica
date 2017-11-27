// Definir el lienzo del trabajo
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

// Definicion de objetos literales para las esctructuras de imagenes
var fondo ={
  url: "tile.png",
  cargaOK: false
};
var vaca ={
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};
var teclas ={
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// variables
var cantidadVacas = aleatorio(1, 10);
var cantidadPollos = aleatorio(1, 10);
var cx = 150, cy = 150;
var movimiento = 5;

// Estructuras de imagenes
fondo.imagen = new Image(); // Crea una etiqueta img
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

window.addEventListener("keydown", moverCerdo);

// funciones declaradas
function moverCerdo(e){
  switch (e.keyCode) {
    case teclas.UP: // restar a y
    cy -= movimiento;
    if(cy < 0){
      cy = 0;
    }
    dibujar();
    break;
    case teclas.DOWN: // sumar a y
    cy += movimiento;
    if(cy > 420){
      cy = 420;
    }
    dibujar();
    break;
    case teclas.LEFT: // restar a x
    cx -= movimiento;
    if(cx < 0){
      cx = 0;
    }
    dibujar();
    break;
    case teclas.RIGHT: // sumar a x
    cx += movimiento;
    if(cx > 420){
      cx = 420;
    }
    dibujar();
    break;
    default:
    console.log("No se realiza nada");
  }
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOK = true;
  vaca.x = [];
  vaca.y = [];
  for(var v = 0; v < cantidadVacas; v++){
    vaca.x[v] = aleatorio(0, 5) * 80;
    vaca.y[v] = aleatorio(0, 5) * 80;
  }
  dibujar();
}
function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos(){
  pollo.cargaOK = true;
  pollo.x = [];
  pollo.y = [];
  for(var p = 0; p < cantidadPollos; p++){
    pollo.x[p] = aleatorio(0, 5) * 80;
    pollo.y[p] = aleatorio(0, 5) * 80;
  }
  dibujar();
}

function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
    for(var v = 0; v < cantidadVacas; v++){
      papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
    }
  }
  if(pollo.cargaOK){
    for(var p = 0; p < cantidadPollos; p++){
      papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
    }
  }
  if(cerdo.cargaOK){
    papel.drawImage(cerdo.imagen, cx, cy);
  }
  document.getElementById("status").innerHTML =
  `
  <p>
  Estado de tu villa:<br/>
  ${cantidadVacas} vacas<br/>
  ${cantidadPollos} pollos<br/>
  1 Cerdo en la posicion (${cx}, ${cy})
  </p>
  `;
}

function aleatorio(min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
