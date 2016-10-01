<?php
require('config/appConfig.php');
require('controller/noticia_controller.php');
require('controller/productos_controller.php');

$noticia_controller = new noticia_controller();
$productos_controller = new productos_controller();

switch (isset($_GET[AppConfig::$ACTION]) ? $_GET[AppConfig::$ACTION] : AppConfig::$ACTION_DEFAULT ) {

  case AppConfig::$ACTION_SHOW_NEWS:
      $noticia_controller->show_news();
  break;

  // case AppConfig::$ACTION_ADD_NEWS:
  //     $noticia_controller->create_news();
  // break;

  case AppConfig::$ACTION_SHOW_PRODUCTS:
      $productos_controller->show_products();
  break;

  // case AppConfig::$ACTION_ADD_PROD:
  //     $noticia_controller->add_products();
  // break;

  case AppConfig::$ACTION_SHOW_ITEM:
  echo "joya";
      $productos_controller->show_item();
  break;

  default:
    echo "sin parametros";
  break;
}
 ?>
