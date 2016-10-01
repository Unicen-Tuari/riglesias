{include file="header.tpl"}
{include file="left.tpl"}
<div id="contenedor-data" class="col-md-8">
  <div class="row productos">
  	<div class="jumbotron productos">
  		<h1>Productos</h1>
  		<p>Llevate todos los productos con la confianza de saber que son de lo mejor.</p>
  	</div>
  </div>
  {foreach from=$productos item=producto}
  <div class="col-sm-4 col-md-3">
  	<div class="thumbnail well">
  		<a class="prod-link" href="#"><img alt="" src=""></a>
  		<div class="caption">
  			<input class="compare-check" type="checkbox">
  			<a href="index.php?action=show_item&item={$producto['id']}">
  				<p>{$producto['nombre']}</p>
  				<p>Precio: $ <span class="precio">{$producto['precio']}</span></p>
  			</a>
  			<button type="button" class="btn btn-danger btn-xs del-item glyphicon glyphicon-trash" data-id="{$producto['id']}"></button>
  		</div>
  	</div>
  </div>
  {/foreach}
</div>
{include file="aside.tpl"}
{include file="footer.tpl"}
