"use strict";

$(document).ready(function(){

  $('#ver-prods').on('click',function(){
      $.ajax({
        method: "POST",
        url: "index.php?action=show_prod",
        contentType:'html',
        cache: false,
        success: function(data){
          $('#contenedor-data').html(data);
        }
      });
  });


  $('#home-admin').on('click',function(){
      $.ajax({
        method: "POST",
        url: "index.php?action=show_home_body",
        contentType:'html',
        cache: false,
        success: function(data){
          $('#contenedor-data').html(data);
        }
      });
  });

  $('#add-prod').on('click',function(){
      $.ajax({
        method: "POST",
        url: "index.php?action=show_form",
        contentType:'html',
        cache: false,
        success: function(data){
          $('#contenedor-data').html(data);
          addFuncSubmit();
        }
      });

  });

  // $('#btnAddItem').on('click',function(){
  //   $.ajax({
  //     method: "POST",
  //     url: "index.php?action=add_prod&id="+$('#id-prod').val()+"&nombre="+$('#nombre-prod').val()+"&precio="+$('#precio-prod').val()+"&descr="+$('#desc-prod').val()+"&cat="+$('#newprod-cat').val()+"&stock="+$('#stock-prod').val(),
  //     contentType:'html',
  //     cache: false,
  //     success: function(data){
  //       console.log("index.php?action=add_prod&id="+$('#id-prod').val()+"&nombre="+$('#nombre-prod').val()+"&precio="+$('#precio-prod').val()+"&descr="+$('#desc-prod').val()+"&cat="+$('#newprod-cat').val()+"&stock="+$('#stock-prod').val());
  //       $('#contenedor-data').html(data);
  //     }
  //   });
  // });

function addFuncSubmit(){
  var testForm = document.getElementById('FormNewProd');
      testForm.onsubmit = function(event) {
        event.preventDefault();
      	var formData = new FormData(document.getElementById('FormNewProd'));

        // formData.append('appended1', 'appended value');
         $.ajax({
        	method: "POST",
        	url: "index.php?action=add_prod",
        	data: formData,
        	contentType: false,
        	cache: false,
        	processData:false,
        	success: function(data){
        	  $('#contenedor-data').html(data);
        	}
      	});
    }
}

  console.log("cargado el js admin");
});
