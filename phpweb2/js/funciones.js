"use strict"

//
// $(window).on('scroll',function(){
//   if($(document).scrollTop()>$('#carousel-example-generic').height()){
//     $('#nav-princ').addClass('navbar-fixed-top');
//   }
//   else $('#nav-princ').removeClass('navbar-fixed-top');
// });


$(document).ready(function(){

  $('#nav-var-links li').on('click',function(){
    var name=$('a',this).attr('name');
    if(name=='productos'){
      cargaProductos();
      console.log("productos");
    }
    $('#nav-var-links li').removeClass('active')
    $(this).addClass('active');
  })
///////////////////////funciones de formulario agregar nuevo item/////////////////////////////
  //
  // $('#newprod-agregar').on('click',function(){
  //   enviarForm();
  // });
});


function bindLinkDescription(){
  $('.item-btn-desc').click(function(){
    //event.preventDefault();
    console.log($(this).attr('data-id-item'));
    $.ajax({
      method: "POST",
      url: "index.php?action=show_item&item="+$(this).attr('data-id-item'),
      contentType:'html',
      cache: false,
      success: function(data){
        $('#contenedor-data').html(data);
      }
    });
  });
}

function cargaProductos(){
  $.ajax({
    method: "POST",
    url: "index.php?action=show_prod",
    contentType:'html',
    cache: false,
    success: function(data){
      $('#contenedor-data').html(data);
      bindLinkDescription();
    }
  });
}

function cargaDescripcion(id){
  $.ajax({
    method: "POST",
    url: "index.php?action=show_item&item="+id,
    contentType:'html',
    cache: false,
    success: function(data){
      $('#contenedor-data').html(data);
    }
  });
}
