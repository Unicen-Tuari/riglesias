<?php
require('view/productos_view.php');
require('model/productos_model.php');

/**
 *  class productos
 */
class productos_controller
{
  private $productos_view;
  private $productos_model;

  public function __construct()
  {
    $this->productos_view = new productos_view;
    $this->productos_model = new productos_model;
  }

  public function show_products(){
    $productos = $this->productos_model->get_products();
    $this->productos_view->show_products($productos);
  }

  public function show_item(){
    if(isset($_REQUEST['item'])){
      echo "item esta puesto";
      $id=$_REQUEST['item'];
      print_r($id);
      $item = $this->productos_model->get_item($id);
      $this->productos_view->show_item($item);
    }else echo "no se proceso";

  }


}


?>
