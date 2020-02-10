var ZombieConductorHorizontal = function (sprite, x, y, ancho, alto, velocidad, rangoMov) {
    ZombieConductor.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

ZombieConductorHorizontal.prototype = Object.create(ZombieConductor.prototype);
ZombieConductorHorizontal.prototype.constructor = ZombieConductorHorizontal;

ZombieConductorHorizontal.prototype.mover = function () {
    this.x += this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
        this.velocidad *= -1;
    }
}

