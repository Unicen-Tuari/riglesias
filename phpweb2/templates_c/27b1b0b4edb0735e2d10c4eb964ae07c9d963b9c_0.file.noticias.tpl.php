<?php
/* Smarty version 3.1.30, created on 2016-09-05 01:54:36
  from "C:\wamp\www\Rama-web2\templates\noticias.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_57ccb43ca13c21_73030876',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '27b1b0b4edb0735e2d10c4eb964ae07c9d963b9c' => 
    array (
      0 => 'C:\\wamp\\www\\Rama-web2\\templates\\noticias.tpl',
      1 => 1473033239,
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
function content_57ccb43ca13c21_73030876 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php $_smarty_tpl->_subTemplateRender("file:left.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<div id="contenedor-data" class="col-md-8">
  <div class="row">
    <div class="jumbotron home">
      <h1>Novedades</h1>
    </div>
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['noticias']->value, 'noticia');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['noticia']->value) {
?>
  <article class="noticia col-md-6">
    <div class="art-head">
      <h2><?php echo $_smarty_tpl->tpl_vars['noticia']->value['titulo'];?>
</h2>
      <p><?php echo $_smarty_tpl->tpl_vars['noticia']->value['fecha'];?>
</p>
      <hr>
      <figure class="news-fig">
        <img src="img/carpa_doite_small.jpg" alt="Carpa Doite" />
        <figcaption>La carpa Doite armada</figcaption>
      </figure>
      <p><?php echo $_smarty_tpl->tpl_vars['noticia']->value['cuerpo'];?>
</p>

    </div>
  </article>
<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

  </div>
            </div>
<?php $_smarty_tpl->_subTemplateRender("file:aside.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php $_smarty_tpl->_subTemplateRender("file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>

<?php }
}
