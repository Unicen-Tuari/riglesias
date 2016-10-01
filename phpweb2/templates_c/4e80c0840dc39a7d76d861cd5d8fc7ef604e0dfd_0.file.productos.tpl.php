<?php
/* Smarty version 3.1.30, created on 2016-09-05 07:03:02
  from "C:\wamp\www\Rama-web2\templates\productos.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_57ccfc86e9d104_69193510',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4e80c0840dc39a7d76d861cd5d8fc7ef604e0dfd' => 
    array (
      0 => 'C:\\wamp\\www\\Rama-web2\\templates\\productos.tpl',
      1 => 1473051327,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:left.tpl' => 1,
    'file:aside.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
),false)) {
function content_57ccfc86e9d104_69193510 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php $_smarty_tpl->_subTemplateRender("file:left.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<div id="contenedor-data" class="col-md-8">
  <div class="row productos">
  	<div class="jumbotron productos">
  		<h1>Productos</h1>
  		<p>Llevate todos los productos con la confianza de saber que son de lo mejor.</p>
  	</div>
  </div>
  <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['productos']->value, 'producto');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['producto']->value) {
?>
  <div class="col-sm-4 col-md-3">
  	<div class="thumbnail well">
  		<a class="prod-link" href="#"><img alt="" src=""></a>
  		<div class="caption">
  			<input class="compare-check" type="checkbox">
  			<a href="index.php?action=show_item&item=<?php echo $_smarty_tpl->tpl_vars['producto']->value['id'];?>
">
  				<p><?php echo $_smarty_tpl->tpl_vars['producto']->value['nombre'];?>
</p>
  				<p>Precio: $ <span class="precio"><?php echo $_smarty_tpl->tpl_vars['producto']->value['precio'];?>
</span></p>
  			</a>
  			<button type="button" class="btn btn-danger btn-xs del-item glyphicon glyphicon-trash" data-id="<?php echo $_smarty_tpl->tpl_vars['producto']->value['id'];?>
"></button>
  		</div>
  	</div>
  </div>
  <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

</div>
<?php $_smarty_tpl->_subTemplateRender("file:aside.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php $_smarty_tpl->_subTemplateRender("file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php }
}
