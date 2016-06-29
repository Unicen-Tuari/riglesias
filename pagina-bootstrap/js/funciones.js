$(window).on('scroll',function(){
  if($(document).scrollTop()>$('#carousel-example-generic').height()){
    $('#nav-princ').addClass('navbar-fixed-top');
  }
  else $('#nav-princ').removeClass('navbar-fixed-top');
});

function cargaDatos(seccion){
  $('#contenedor-data').html("cargando...");
  $.ajax({
    url:'sections/'+seccion+'.html',
    dataType: 'HTML',
    method: 'GET',
    error: function(){
      alert("la carga fallo");
    },
    success: function(data){
      $('#contenedor-data').html(data);
      $('[data-toggle="tooltip"]').tooltip();//inicializo los tooltips que contenga el html que levante el ajax
    }

  });
}


function muestraDatos(datos,ids){
  var tbody = '<table class="tabla-comp table"><thead><tr><th>Caracteristicas</th><th>Producto 1</th><th>Producto 2</th></tr></thead><tbody>';
  tbody+='<tr><th>Actividad</th><td>'+(datos.information[ids[0]].thing.actividad)+'</td><td>'+(datos.information[ids[1]].thing.actividad)+'</td></tr>';
  tbody+='<tr><th>Costuras</th><td>'+(datos.information[ids[0]].thing.costuras)+'</td><td>'+(datos.information[ids[1]].thing.costuras)+'</td></tr>';
  tbody+='<tr><th>UPF</th><td>'+(datos.information[ids[0]].thing.upf)+'</td><td>'+(datos.information[ids[1]].thing.upf)+'</td></tr>';
  tbody+='<tr><th>Varillas</th><td>'+(datos.information[ids[0]].thing.varillas)+'</td><td>'+(datos.information[ids[1]].thing.varillas)+'</td></tr>';
  tbody+='<tr><th>Personas</th><td>'+(datos.information[ids[0]].thing.personas)+'</td><td>'+(datos.information[ids[1]].thing.personas)+'</td></tr>';
  tbody+='<tr><th>Filtro</th><td>'+(datos.information[ids[0]].thing.filtro)+'</td><td>'+(datos.information[ids[1]].thing.filtro)+'</td></tr>';
  tbody+='<tr><th>Peso</th><td>'+(datos.information[ids[0]].thing.peso)+'</td><td>'+(datos.information[ids[1]].thing.peso)+'</td></tr>';
  tbody+='<tr><th>Impermeabilidad</th><td>'+(datos.information[ids[0]].thing.imperm)+'</td><td>'+(datos.information[ids[1]].thing.imperm)+'</td></tr>';
  tbody+='</tbody></table>';
  $('#contenedor-data').html(tbody);
}

function getInformationByGroup(groupid,ids){
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/group/" + groupid,
    method:"GET",
    contentType: "application/json; charset=utf-8",
    success: function(resultData){
      muestraDatos(resultData,ids);
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}

$(document).ready(function(){
  $('#home').on('click',function(){
    cargaDatos('news');
  });

  $('#productos').on('click',function(){
    cargaDatos('productos');
    $('.navbar-nav li').removeClass('active');
    $('#productos').parent().addClass('active');
    console.log($(this).attr('id'));
  });

  $('body').on('click','#comparar',function(){
    $('#ok').toggle();
    $('.carpas .compare-check').toggle();
  });

  $('body').on('click','#ok',function(){
    if($('.carpas .compare-check:checked').length==2){
      var x='';
      var ids = [];
      $('.carpas .compare-check:checked').each(function(){
        x=parseInt($(this).attr('idprod'));
        ids.push(x);
      });

      $('#contenedor-data').html('<div class="row"><img src="img/loading.gif"></div>');
      getInformationByGroup(77,ids);
    }else console.log("Solo puede seleccionar 2 productos");
  });


});
