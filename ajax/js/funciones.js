function cargadatos(){
  $("#cont1").html("cargando...");
  $.ajax({
    url:"http://web-unicen.herokuapp.com/api/html?",
    error:function(){
      console.log("no cargo");
    },
    dataType:'HTML',
    success:function(data){
      console.log("cargo!!");
      $("#cont1").html(data);
    },
    method:"GET"
  });
}

function borradatos(){
  $("#cont1").html('');
}

$(document).ready(function(){
  $("#cargar").on("click",cargadatos);
  $("#borrar").on("click",borradatos);
});
