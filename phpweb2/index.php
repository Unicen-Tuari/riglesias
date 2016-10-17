<?php
require('config/appConfig.php');
require('controller/noticia_controller.php');
require('controller/productos_controller.php');
require('libs/Smarty.class.php');


$noticia_controller = new noticia_controller();
$productos_controller = new productos_controller();

switch (isset($_GET[AppConfig::$ACTION]) ? $_GET[AppConfig::$ACTION] : AppConfig::$ACTION_DEFAULT ) {

  case AppConfig::$ACTION_SHOW_NEWS:
      $noticia_controller->show_news();
  break;

  case AppConfig::$ACTION_SHOW_PRODUCTS:
      $productos_controller->show_products();
  break;

  case AppConfig::$ACTION_SHOW_ITEM:
      $productos_controller->show_item();
  break;

  default:
    echo "sin parametros";
  break;
}
 ?>
