class Pakiman{
  constructor(n, v, a){
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }

  hablar(){
    alert(this.nombre);
  }
  mostrar(){
    document.write("<p id=\"area-"+ this.nombre +"\">");
    var area = document.getElementById("area-" + this.nombre);
    area.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque);
    document.write("</p>");
  }
}
