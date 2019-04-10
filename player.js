'use strict';

function Player(canvas){
  this.lives = 3;
  this.x = 50;
  this.canvas = canvas;
  this.y = this.canvas.height/2;
  this.size = 50;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
}

Player.prototype.draw = function(){
  this.ctx.fillStyle ='blue';
  this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size);
}

Player.prototype.update = function(){
  this.y = this.y + this.direction*this.speed;
}

Player.prototype.setDirection = function(newDirection){
  this.direction = newDirection;
  console.log( this.direction)
} 

Player.prototype.setLives = function(){
  
}