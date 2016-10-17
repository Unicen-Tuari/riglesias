{foreach from=$producto item=product}
  <div class="row productos">
  	<div class="jumbotron productos">
  		<h1>Productos</h1>
  		<p>Descripcion de {$product['nombre']}</p>
  	</div>
  </div>
  <div class="col-sm-4 col-md-3">
  	<div class="thumbnail well">
  		<a class="prod-link" href="#"><img alt="" src=""></a>
  		<div class="caption">
  			<input class="compare-check" type="checkbox">
          <!-- <img src="{$product['imgsrc']}" alt="{$product['nombre']}" /> -->
  				<p>{$product['nombre']}</p>
  				<p>Precio: $ <span class="precio">{$product['precio']}</span></p>
          <p>Descripcion: {$product['descripcion']}</p>

  		</div>
  	</div>
  </div>
  {/foreach}
