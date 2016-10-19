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
          addFuncAdminItems();
          addFuncEditItem();
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
          addFuncSubmit('add_prod');
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

function addFuncSubmit(action){
  console.log(action);
  var testForm = document.getElementById('FormNewProd');
      testForm.onsubmit = function(event) {
        event.preventDefault();
      	var formData = new FormData(document.getElementById('FormNewProd'));

        // formData.append('appended1', 'appended value');
         $.ajax({
        	method: "POST",
        	url: "index.php?action="+action,
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

function addFuncAdminItems(){
  console.log("yeah!");
  $('.del-item').click(function(){
     var id=($(this).attr('data-id'));

     $.ajax({
        method: "POST",
        url: "index.php?action=delete_product&id="+id,
        contentType: false,
        cache: false,
        success: function(data){
          $('#contenedor-data').html(data);
        }
      });
    });
}

function addFuncEditItem(){
  console.log("funcion de edicion cargada!!");
  $('.edit-item').click(function(){
     var id=($(this).attr('data-id'));

     $.ajax({
        method: "POST",
        url: "index.php?action=edit_product&id="+id,
        contentType: false,
        cache: false,
        success: function(data){
          $('#contenedor-data').html(data);
          swapFieldSet();
          addFuncSubmit('update_product');
        }
      });
    });
}

function swapFieldSet(){
  $('#id-prod').val($('#edit-id').val());
  $('#nombre-prod').val($('#edit-nombre').val());
  $('#precio-prod').val($('#edit-precio').val());
  $('#stock-prod').val($('#edit-stock').val());
  $('#desc-prod').val($('#edit-desc').val());
  $('#newprod-cat').val(''+$('#edit-cat').val());
}

  console.log("cargado el js admin");
});
