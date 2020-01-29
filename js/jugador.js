/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = function(vidasInicial){
  /* el sprite contiene la ruta de la imagen
  */
  this.sprite = 'imagenes/auto_rojo_abajo.png',
  this.x = 130,
  this.y = 160,
  this.ancho = 15,
  this.alto = 30,
  this.velocidad = 10,
  this.vidas = vidasInicial
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
}

Jugador.prototype.perderVidas = function (cantVidas) {
  console.log(this);
  console.log("Potencia del obstaculo ", cantVidas);
  this.vidas = this.vidas-cantVidas>0? this.vidas-cantVidas: 0;
  console.log(this);
}

Jugador.prototype.actualizarSprite = function (tecla){
  if (tecla == 'izq') {
    this.sprite = 'imagenes/auto_rojo_izquierda.png';
  }
  if (tecla == 'arriba') {
    this.sprite = 'imagenes/auto_rojo_arriba.png';
  }
  if (tecla == 'der') {
    this.sprite = 'imagenes/auto_rojo_derecha.png';
  }
  if (tecla == 'abajo') {
    this.sprite = 'imagenes/auto_rojo_abajo.png';
  }
  this.ancho = tecla == "der" || tecla == 'izq' ? 30: 15;
  this.alto = tecla == "der" || tecla == 'izq' ? 15: 30;
}

Jugador.prototype.mover = function (nuevaPosicionEnX, nuevaPosicionEnY, tecla) {
  this.x = nuevaPosicionEnX;
  this.y = nuevaPosicionEnY;
  this.actualizarSprite(tecla);
}