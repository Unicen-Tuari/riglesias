<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1,width=device-width">
    <title>Camping, Pesca y Motos</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">
    <script src="js/jquery.js" charset="utf-8"></script>
    <script src="js/bootstrap.min.js" charset="utf-8"></script>
    <!-- <script src="js/funciones.js" charset="utf-8"></script> -->
  </head>

  <body>

<!-- formulario Modal para añador producto -->
    <div class="modal fade" id="modal-additem" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Agregar Producto</h4>
          </div>
          <div class="modal-body">


            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Categoria</label>
                <select id="newprod-cat" class="form-control">
                  <option value="" disabled selected>- Elija categoria -</option>
                  <option value="carpa">Carpa</option>
                  <option value="cania">Caña de pescar</option>
                  <option value="kayak">Kayaks</option>
                </select>
              </div>
              <div class="form-group">
                <label for="nombre-prod">Nombre</label>
                <input type="text" class="form-control" id="nombre-prod" placeholder="Nombre del Producto">
              </div>
              <div class="form-group">
                <label for="precio-prod">Precio</label>
                <input type="text" class="form-control" id="precio-prod" placeholder="Precio">
              </div>
              <div class="form-group">
                <label for="desc-prod">Descripción</label>
                <textarea class="form-control" id="desc-prod" placeholder="Descripcion del producto" rows="3" maxlength="1000"></textarea>
              </div>


            </form>

            <div id="newprod-error" class="alert alert-danger" role="alert"></div>



          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button id="newprod-agregar" type="button" class="btn btn-primary">Agregar</button>
          </div>
        </div>
      </div>
    </div>
<!-- //formulario Modal para añador producto -->


<!-- wrapper -->

<!-- title bar -->
      <div class="container-fluid hidden-sm hidden-xs">
        <div class="row ribbon-logo">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="img/camping2.jpg" alt="el slide 1 viteh" class="img-responsive" style="background-size: cover;">
                  <div class="carousel-caption">
                    "Piérdete en el mundo y encuéntrate contigo mismo"
                  </div>
                </div>
                <div class="item">
                  <img src="img/crew.jpg" alt="el slide 2 viteh" class="img-responsive">
                  <div class="carousel-caption">
                    "Escucho a las rutas llamarme, son voces graves que me invitan a rodar..."
                  </div>
                </div>
                <div class="item">
                  <img src="img/slide3.jpg" alt="el slide 3 viteh" class="img-responsive">
                  <div class="carousel-caption">
                    "La felicidad solo es real cuando es compartida"
                  </div>
                </div>
              </div>

              <!-- Controls -->
              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        </div>
      </div>
<!-- //title bar -->


<!-- nav bar -->

        <nav id="nav-princ" class="navbar navbar-default">
        	<div class="container-fluid">
            <!-- <div class="ribbon"><h1>Camping, Pesca y Motos</h1></div> -->
        		<div class="navbar-header">
        			<button aria-expanded="false" data-target="#bs-example-navbar-collapse-6" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
        				<span class="sr-only">Toggle navigation</span>
        				<span class="icon-bar"></span>
        				<span class="icon-bar"></span>
        				<span class="icon-bar"></span>
        			</button>
        		</div>
        		<div id="bs-example-navbar-collapse-6" class="collapse navbar-collapse">
        			<ul class="nav navbar-nav" id="nav-var-links">
        				<li class="active"><a href="index.php" name="news">Home</a></li>
        				<li><a href="index.php?action=show_prod" name="productos">Productos</a></li>
        				<li><a href="#" name="reviews">Reviews</a></li>
        				<li><a href="#" name="guias">Guias</a></li>
        				<li><a href="#" name="contacto">Contacto</a></li>
        			</ul>
        		</div>

        	</div>
        </nav>

<!-- //nav bar -->
