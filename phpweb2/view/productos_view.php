<?php
// require('libs/Smarty.class.php');

/**
 *
 */
class productos_view
{
  private $smarty;

  public function __construct()
  {
    $this->smarty=new Smarty;
  }

  public function show_products($productos){
    $this->smarty->assign('productos',$productos);
    $this->smarty->display('productos.tpl');
  }

  public function show_item($item){
    $this->smarty->assign('item',$item);
    $this->smarty->display('item.tpl');
  }
}



?>
