"use strict"

$(document).ready(function(){
  console.log("cargado");

  $('#btn-newgame').click(function(){
    game.Start();
    $('#overlay-cortina').hide();
  });

  $('#btn-girar').click(function(){
    game.Jugada();
  });

  $('.numbtn').click(function(){
    var nro = parseInt(($(this).index('.numbtn')));
    game.Apostar(nro);
  });
});
////////////////// obj game ///////////////////////
function Game(){
  this.inic = false;
  this.hasbet = false;
  this.error = '';
  this.cameout = -1;
  this.arr_nums = [];

}

Game.prototype.Start = function(){
  console.log("el juego ha comenzado!");
  this.inic = true;
  this.arr_nums = [0,0,0,0,0,0,0,0,0,0,0];
  $('#saldo').html(jugador.saldo());
};

Game.prototype.Girar = function(){
      var num=(Math.floor((Math.random() * 11)));
      console.log("salio el: "+num);//borrar
      this.cameout=num;
};

Game.prototype.Apostar = function(nro){
  this.hasbet=true;
  this.arr_nums[nro]++;
  console.log(this.arr_nums);//borrar

};

Game.prototype.Refresh = function(){
  this.arr_nums = [0,0,0,0,0,0,0,0,0,0,0];
  this.cameout = -1;
  this.hasbet = false;
}

Game.prototype.Transaction = function(){
  if(this.arr_nums[this.cameout]!=0){
    jugador.credit(333);
    console.log('ganaste!! :) ');
  }else{
    jugador.debit(33);
    console.log('perdiste :( !!');
  }
  $('#saldo').html(jugador.saldo());
}

Game.prototype.Jugada = function(){
  if(this.inic){
    if(this.hasbet){
      this.Girar();
      this.Transaction();
      this.Refresh();
    }else console.log('Debe Realizar una apuesta');
  }else console.log('Debe iniciar un Nuevo Juego');
};

///////////////////////// obj jugador ///////////////////////////////
function Jugador(nombre,apellido){
  this.nombre=nombre;
  this.apellido=apellido;
  var cash=100;

  return{
    debit: function(cant){
      cash-=cant;
    },
    saldo: function(){
      return cash;
    },
    credit: function(cant){
      cash+=cant;
    }
  }
}


///////////////////// init ///////////////////////////
var jugador = new Jugador('pepe','rodriguez');
var game = new Game();
