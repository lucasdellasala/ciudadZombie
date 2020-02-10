var ZombieConductorVertical = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
    ZombieConductor.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);  
}
  
  ZombieConductorVertical.prototype = Object.create(ZombieConductor.prototype);
  ZombieConductorVertical.prototype.constructor = ZombieConductorVertical;
  
  ZombieConductorVertical.prototype.mover = function() {
    this.y += this.velocidad;
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
        this.velocidad *= -1;
    }
}
