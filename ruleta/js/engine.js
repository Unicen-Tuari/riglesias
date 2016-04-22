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
  }else{
    num=Math.floor((Math.random() * 10));
    printMsg('Salió el nro: '+num+'');
    if(selected==num){
      pay_cash();
      printMsg('Usted ganó!');
    }else{
      penalty++;
      if(penalty==3){
        penalty=0;
        cash-=1;
        printMsg('Se le cobrará 1 crédito por penalización!');
      }
      printMsg('Usted perdió!');
    }
    printMsg('Haga su apuesta!');
    document.getElementById('saldo').innerHTML=cash;
    selected=-1;
    total_bet=0;
    console.log(cash);
  }

}
window.onload=function(){
  printMsg('Haga su apuesta!');
  document.getElementById('saldo').innerHTML=cash;
}
