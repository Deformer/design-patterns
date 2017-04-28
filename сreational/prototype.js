/**
 * Created by sbelan on 4/28/2017.
 */
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
  this.speed = 0;
  console.log( this.name + ' стоит' );
};

Animal.prototype.run = function(speed) {
  this.speed += speed;
  console.log( this.name + ' бежит, скорость ' + this.speed );
};

function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.jump = function() {
  this.speed++;
  console.log(this.name + ' прыгает, скорость ' + this.speed);
};

const rabbit = new Rabbit('Alex');
rabbit.run(10);
rabbit.jump();