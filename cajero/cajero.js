// Declaraciones de funciones
function presentarEstadoActual(){
  var total = 0;
  estado.innerHTML = "";
  for(var b of caja){
    estado.innerHTML += b.cantidad + " billetes de C$ " + b.valor + " = "+ (b.cantidad * b.valor) +"<br />";;
    total += (b.cantidad * b.valor);
  }
  estado.innerHTML += "Estado Actual: C$ " + total;
}

function entregarDinero(){
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for(var bi of caja){
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }else{
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }

  if(dinero > 0){
    resultado.innerHTML = "No puedo darte esa cantidad";
  }else{
    dibujarBilletesEntregados();
    restarCaja();
    presentarEstadoActual();
  }
  entregado = [];
}

function dibujarBilletesEntregados(){
  resultado.innerHTML = "";
  for(var e of entregado){
    if(e.cantidad > 0){
      for(var i = 1; i <= e.cantidad; i++){
        var imgBillete = new Image();
        imgBillete.src = e.src;
        resultado.appendChild(imgBillete);
      }
      resultado.innerHTML += "<hr />";
    }
  }
}

function restarCaja(e){
  for(var e of entregado){
    for(var c of caja){
      if(e.valor == c.valor){
        c.cantidad -= e.cantidad;
      }
    }
  }
}

// Inicializacion de los billetes que están dispuestos en el cajero
var caja = [];
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));

// Declaraciones de variables
var entregado = [];

var dinero = 0;
var div = 0;
var papeles = 0;

var estado = document.getElementById("estado");
var resultado = document.getElementById("resultado");
var btnExtraer = document.getElementById("extraer");
btnExtraer.addEventListener("click", entregarDinero);

presentarEstadoActual();
