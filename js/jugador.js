/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5, 
  perderVidas: function (cantVidas) {
    this.vidas = this.vidas-cantVidas;
  },
  actualizarSprite: function (tecla){
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
  },
  mover: function (nuevaPosicionEnX, nuevaPosicionEnY, tecla) {
    this.x = nuevaPosicionEnX;
    this.y = nuevaPosicionEnY;
    this.actualizarSprite(tecla);
  },

  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

}
