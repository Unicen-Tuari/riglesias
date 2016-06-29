"use strict"
var val_pleno=36;
var val_cero=42;
var val_chance=2;
var chip_selected=0;
var jugador=null;
var game=null;
var rango=5;
/////////////////////////////////
$(document).ready(function(){
  console.log("cargado");

  $('#btn-newgame').click(function(){
    inicializar();
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

  $('#chips-panel div').click(function(){

    var pepe=($(this).attr('id'));
    //$('#'+pepe).hide();
    chip_selected=parseInt($(this).attr('valor'));
    console.log(chip_selected);
  });

});


////////////////// obj game ///////////////////////
function Game(){
  this.inic = false;
  this.hasbet = false;
  this.error = '';
  this.cameout = -1;
  this.bets = [];
  this.bets_rev = [];
  this.revancha = true;
  this.colour = '';
  this.range = '';
  this.odds = '';
  this.reds = [1,3,5,6,8];
}

Game.prototype.Start = function(){
    $('#msg-panel').html('<p>el juego ha comenzado!</p>');
  this.inic = true;
  this.bets = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  $('#saldo').html(jugador.saldo());
  $("#rango").on('change',function(){console.log("peop")});
};

Game.prototype.Girar = function(){
      var num=(Math.floor((Math.random() * 11)));
      $('#msg-panel').prepend('<p>salió el número: '+num+'</p>');//borrar
      this.cameout=num;
      $(".numbtn").eq(parseInt(this.cameout)).addClass('winner');
      console.log($(".numbtn").eq(parseInt(this.cameout)));
};

Game.prototype.Apostar = function(nro){
  if((jugador.saldo()-chip_selected)>=0){
    this.hasbet=true;
    this.bets[nro]+=chip_selected;
    jugador.debit(chip_selected);
      console.log(jugador.saldo());//borrar
      console.log(this.bets);//borrar
    $('#saldo').html(jugador.saldo());
  }else $('#msg-panel').prepend('<p>Saldo insuficiente!</p>');
};

Game.prototype.isRed = function(){
  for(var i=0;i<(this.reds).length;i++){
    if(this.reds[i]==this.cameout){
      return true;
    }
   }
};

Game.prototype.isOdd = function(){
  if((this.cameout % 2)==0){
    return true;
  }else return false;
}

Game.prototype.Refresh = function(){
  //$(".numbtn").eq(this.cameout).removeClass('winner');
  this.bets_rev=this.bets;
  this.bets = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  this.cameout = -1;
  this.hasbet = false;
  chip_selected=0;
  console.log('ronda finalizada');
  console.log(this.bets_rev);
  setTimeout(function(){ 
    $(".numbtn").eq(this.cameout).removeClass('winner');
  }, 3000);
}

Game.prototype.Resultado = function(){
  var sum=0;

  if((this.cameout)!=0){
    //color
    if((this.bets[11]!=0)&& this.isRed()){
      sum+=(this.bets[11])*val_chance;
    }else if((this.bets[12]!=0)&& !this.isRed()){
      sum+=(this.bets[12])*val_chance;
    }

    //paridad
    if((this.bets[13]!=0)&& this.isOdd()){
      sum+=(this.bets[13])*val_chance;
    }else if((this.bets[14]!=0)&& !this.isOdd()){
      sum+=(this.bets[14])*val_chance;
    }

    //rango
    if((this.bets[15]!=0)&&(this.cameout<rango)){
      sum+=(this.bets[15])*val_chance;
    }else if((this.bets[16]!=0)&&(this.cameout>rango)){
      sum+=(this.bets[16])*val_chance;
    }
  }

  //plenos
  if(this.cameout==0){
    sum+=(this.bets[0]*val_cero);
  }else sum+=(this.bets[this.cameout]*val_pleno);


  return sum;
};

Game.prototype.Revancha = function(){
  this.bets=this.bets_rev;
  console.log(this.bets);
  this.hasbet=true;
  this.revancha=false;
  this.Jugada();
  this.revancha=true;
};

Game.prototype.Transaction = function(){
  var monto=this.Resultado();
    jugador.credit(monto);

    if(monto==0){
      $('#msg-panel').prepend('<p>Usted perdió</p>');
      if(this.revancha==true){
        $('#btn-revancha').show();
        $('#msg-panel').prepend('<p>Usted dispone de un tiro de Revancha!</p>');
        $('#btn-revancha').on('click',function(){
          game.Revancha();
          $(this).hide();
        });
      }
    }else $('#msg-panel').prepend('<p>Usted ganó: '+monto+' creditos</p>');

  $('#saldo').html(jugador.saldo());
};

Game.prototype.Jugada = function(){
  if(this.inic){
    if(this.hasbet){
      this.Girar();

      this.Transaction();

      if(jugador.saldo()==0){
        $('#msg-panel').prepend('<p>su juego ha terminado, lo siento!</p>');
        finalizar();
      }else this.Refresh();
    }else $('#msg-panel').prepend('<p>Debe Realizar una apuesta</p>');
  }else $('#msg-panel').prepend('<p>Debe iniciar un Nuevo Juego</p>');
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

function inicializar(){
  jugador = new Jugador('pepe','rodriguez');
  game = new Game();
  var juke = document.getElementById("jukebox");
  juke.volume = 0.2;
  juke.play();
}

function finalizar(){
  game=null;
  jugador=null;
  $('#overlay-cortina').show();
  var juke = document.getElementById("jukebox");
  juke.pause();
}
