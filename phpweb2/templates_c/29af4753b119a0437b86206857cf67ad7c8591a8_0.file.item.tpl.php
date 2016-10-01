<?php
/* Smarty version 3.1.30, created on 2016-09-05 07:02:51
  from "C:\wamp\www\Rama-web2\templates\item.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_57ccfc7b572641_66793657',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '29af4753b119a0437b86206857cf67ad7c8591a8' => 
    array (
      0 => 'C:\\wamp\\www\\Rama-web2\\templates\\item.tpl',
      1 => 1473051768,
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
function content_57ccfc7b572641_66793657 (Smarty_Internal_Template $_smarty_tpl) {
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
