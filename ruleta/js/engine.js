/* Engine para Ruleta*/
"use strict";

var cash=100;
var total_bet=0;
var msg='';
var selected=-1;
var num=0;
var penalty=0;
/*-------------------------------------------------------*/
function pay_cash(){
  cash+=10;
}
/*-------------------------------------------------------*/
function debit_cash(){
  if(penalty==3){
    penalty=0;
    cash-=2;
    printMsg('Perdió 3 veces seguidas, se le cobrará doble penalización!');
  }else{
    cash-=1;
    printMsg('Usted perdió! se le penaliza con -1 credito');
  }
}

/*-------------------------------------------------------*/
function selectNum(num){
  selected=num;
  printMsg('Usted seleccionó el numero '+num);
}

/*-------------------------------------------------------*/
function printMsg(mensaje){
  var temp=msg;
  msg=mensaje+'<br>'+temp;
  document.getElementById('msg').innerHTML=msg;
}

/*-------------------------------------------------------*/
function addCash(chip){
    if((cash-chip)>=0){
      total_bet+=chip;
      cash-=chip;
      document.getElementById('saldo').innerHTML=cash;
      printMsg('Apuesta total: $'+total_bet);
    }

}

/*-------------------------------------------------------*/
function play(){
  //bet=document.getElementById('bet').value;
  if(selected==-1){
    printMsg('Debe seleccionar un numero del tablero');
  }else if(total_bet==0){
    printMsg('Debe Realizar una apuesta antes de Girar la Ruleta!');
  }else{
    num=Math.floor((Math.random() * 10));
    printMsg('Salió el nro: '+num+'');
    if(selected==num){
      pay_cash();
      printMsg('Usted ganó!');
    }else{
      penalty++;
      debit_cash();

    }
    printMsg('Haga su apuesta!');
    document.getElementById('saldo').innerHTML=cash;
    selected=-1;
    total_bet=0;
  }

}
window.onload=function(){
  printMsg('Haga su apuesta!');
  document.getElementById('saldo').innerHTML=cash;
}
