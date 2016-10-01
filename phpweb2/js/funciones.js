var groupid=77;

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
      $('#rev-list button').on('click',function(){
        cargaDatos($(this).attr('id-rev'));
      });
      $('#guia-list button').on('click',function(){
        cargaDatos($(this).attr('id-guia'));
      });
    }

  });


}

// function muestraDatos(datos){
//   var tbody = '<table class="tabla-comp table"><thead><tr><th>Caracteristicas</th><th>Producto 1</th><th>Producto 2</th></tr></thead><tbody>';
//   tbody+='<tr><th>Actividad</th><td>'+(datos.information[ids[0]].thing.actividad)+'</td><td>'+(datos.information[ids[1]].thing.actividad)+'</td></tr>';
//   tbody+='<tr><th>Costuras</th><td>'+(datos.information[ids[0]].thing.costuras)+'</td><td>'+(datos.information[ids[1]].thing.costuras)+'</td></tr>';
//   tbody+='<tr><th>UPF</th><td>'+(datos.information[ids[0]].thing.upf)+'</td><td>'+(datos.information[ids[1]].thing.upf)+'</td></tr>';
//   tbody+='<tr><th>Varillas</th><td>'+(datos.information[ids[0]].thing.varillas)+'</td><td>'+(datos.information[ids[1]].thing.varillas)+'</td></tr>';
//   tbody+='<tr><th>Personas</th><td>'+(datos.information[ids[0]].thing.personas)+'</td><td>'+(datos.information[ids[1]].thing.personas)+'</td></tr>';
//   tbody+='<tr><th>Filtro</th><td>'+(datos.information[ids[0]].thing.filtro)+'</td><td>'+(datos.information[ids[1]].thing.filtro)+'</td></tr>';
//   tbody+='<tr><th>Peso</th><td>'+(datos.information[ids[0]].thing.peso)+'</td><td>'+(datos.information[ids[1]].thing.peso)+'</td></tr>';
//   tbody+='<tr><th>Impermeabilidad</th><td>'+(datos.information[ids[0]].thing.imperm)+'</td><td>'+(datos.information[ids[1]].thing.imperm)+'</td></tr>';
//   tbody+='</tbody></table>';
//   $('#contenedor-data').html(tbody);
// }



function muestraProductos(datos){
  var item = '<div class="row productos"><div class="jumbotron productos"><h1>Productos</h1><p>Llevate todos los productos con la confianza de saber que son de lo mejor.</p></div>';
  var fila='';
  var img='';
  for(var i=0;i<(datos.information.length);i++){
    img=(typeof(datos.information[i].thing.foto)=='undefined') ? 'img/prods/default.jpg' : datos.information[i].thing.foto;
    console.log(img);
    fila='<div class="col-sm-4 col-md-3"><div class="thumbnail well"><a class="prod-link" id-desc="'+i+'" href="#"><img alt="" src="'+img+'"></a><div class="caption"><input class="compare-check" idprod="0" type="checkbox"><a href="#"><p>'+datos.information[i].thing.nombre+'</p><p>Precio: $ <span class="precio">'+datos.information[i].thing.precio+'</span></p></a><button type="button" class="btn btn-danger btn-xs del-item glyphicon glyphicon-trash" data-id="'+datos.information[i]._id+'"></button></div></div></div>';
    item+=fila;
  }
  item+='</div>';
  $('#contenedor-data').html(item);
}


function showDescription(dato){
  img=(typeof(dato.foto)=='undefined') ? 'img/prods/default.jpg' : dato.foto;
  var body='<div class="row"><div class="col-md-10 col-md-offset-1"><h3>'+dato.nombre+'</h3><p>Codigo: '+dato.cod+'</p><p>Precio: '+dato.precio+'</p><img src="'+img+'" class="img-responsive" alt="Responsive image"><p>&nbsp;</p><h4>Descripción:</h4><p>'+dato.descripcion+'</p><table class="table table-striped"><thead><tr><td><td colspan="2"></td></td></tr></thead><tbody><tr><th>Actividad</th><td>'+dato.specs.act+'</td></tr><tr><th>Impermeabilidad</th><td>'+dato.specs.imp+'</td></tr><tr><th>Factor Radiacion UV</th><td>'+dato.specs.upf+'</td></tr><tr><th>Varillas</th><td>'+dato.specs.vars+'</td></tr><tr><th>Capacidad</th><td>'+dato.specs.cap+'</td></tr><tr><th>Peso</th><td>'+dato.specs.peso+'</td></tr></tbody></table>';

  body+='</div></row>';
  $('#contenedor-data').html(body);
}

function cargaProductos(){
  getGroupInfo();

}

function enviarForm(){
  var error=true;
  var msg_error='';
  var cat=$('#newprod-cat option:selected').val();
  var nombre=$('#nombre-prod').val();
  var precio=$('#precio-prod').val();
  var desc=$('#desc-prod').val();

  if(cat=='') msg_error+='<span class="glyphicon glyphicon-remove"></span>Debe seleccionar una categoria<br>';
  if(nombre=='') msg_error+='<span class="glyphicon glyphicon-remove"></span>Debe declarar un Nombre para el producto<br>';
  if(precio=='') msg_error+='<span class="glyphicon glyphicon-remove"></span>Establezca un Precio al Producto<br>';
  if(desc=='') msg_error+='<span class="glyphicon glyphicon-remove"></span>Agregue una breve descripcion del producto<br>';
  //
  // if(!error){
  //   enviar();
  // }else alert(msg_error);

  if((cat=='')||(nombre=='')||(precio=='')||(desc=='')){
    error=true;
    $('#newprod-error').html(msg_error).show();
  }else {
    var datos={
      	"group":"77",
      	"thing":{
      		"cod":"1106",
      		"tipo":cat,
      		"nombre":nombre,
      		"precio":precio,
      		"descripcion":desc,
          "specs":{
        			"act":"Camping, Mochilero, Trekking",
        			"imp":"3.000 mm",
        			"upf":"grado 50+",
        			"vars":"Fibra de Vidrio",
        			"cap":"2 personas",
        			"peso":"5.6 kg",
        		}
      	 }
      };

      $('#newprod-error').html('').hide();
      $('#nombre-prod,#precio-prod,#desc-prod').val('');
      $('#newprod-cat').val('');

      addNewProduct(datos);
  }
}

function addNewProduct(datos){
  $.ajax({
    url: 'http://web-unicen.herokuapp.com/api/create',
    method: 'POST',
    dataType: 'JSON',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(datos),
    success: function (resultData) {
      cargaProductos();
    },
    error: function (jqxml, status, errorThrown) {
      console.log(errorThrown);
    }
  });

}


function getGroupInfo(){
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/group/" + groupid,
    method:"GET",
    contentType: "application/json; charset=utf-8",
    success: function(resultData){
      muestraProductos(resultData);
      $('.del-item').on('click',function(){
        deleteInfoById($(this).attr('data-id'));
        //console.log($(this).attr('data-id'));
      });
      $('.prod-link').on('click',function(){
        var i=$(this).attr('id-desc');
        showDescription(resultData.information[i].thing);
      })
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}

function deleteInfoById(id){
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/delete/"+id,
    method:"DELETE",
    success: function(resultData){
      cargaProductos();
    },
    error:function(jqxml, status, errorThrown){
      alert('Error!');
      console.log(errorThrown);
    }
  });
}



$(document).ready(function(){
  cargaDatos('news');

  // $('#home').on('click',function(){
  //   cargaDatos('news');
  // });
  //
  // $('#productos').on('click',function(){
  //   cargaProductos();
  //   $('#prod-tools').show();
  //   //cargaDatos('productos');
  //   $('.navbar-nav li').removeClass('active');
  //   $('#productos').parent().addClass('active');
  // });
  //
  // $('#reviews').on('click',function(){
  //   cargaDatos('reviews');
  // });
  // $('#guias').on('click',function(){
  //   cargaDatos('guias');
  // });

  $('#nav-var-links li').on('click',function(){
    var name=$('a',this).attr('name');
    if(name=='productos'){
      cargaProductos();
      $('#prod-tools').show();
    }else{
      cargaDatos(name);
      $('#prod-tools').hide();
    }
    $('#nav-var-links li').removeClass('active')
    $(this).addClass('active');
  })


///////////////////////funciones de formulario agregar nuevo item/////////////////////////////


  $('#newprod-agregar').on('click',function(){
    enviarForm();
  });





  // fucion que mostraba opciones de comparar entre 2 productos


  // $('body').on('click','#comparar',function(){
  //   $('#ok').toggle();
  //   $('.carpas .compare-check').toggle();
  // });


  // $('body').on('click','#ok',function(){
  //   if($('.carpas .compare-check:checked').length==2){
  //     var x='';
  //     var ids = [];
  //     $('.carpas .compare-check:checked').each(function(){
  //       x=parseInt($(this).attr('idprod'));
  //       ids.push(x);
  //     });
  //
  //     $('#contenedor-data').html('<div class="row"><img src="img/loading.gif"></div>');
  //     getInformationByGroup(77,ids);
  //   }else console.log("Solo puede seleccionar 2 productos");
  // });


});
