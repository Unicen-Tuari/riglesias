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

  public function show_home_admin(){
    $this->smarty->display('../templates/admin.tpl');
  }
  public function show_form(){
    $this->smarty->display('../templates/add_product.tpl');
  }

  public function show_home_admin_body(){
    $this->smarty->display('../templates/admin_body_home.tpl');
  }

  public function show_table_products($productos){
    //print_r($productos);
    $this->smarty->assign('productos',$productos);
    //$this->smarty->display('../templates/table_productos.tpl');
    $this->smarty->display('../templates/table_productos.tpl');
  }

  public function show_products($productos){
    //print_r($productos);
    $this->smarty->assign('productos',$productos);
    $this->smarty->display('productos.tpl');
  }

  public function show_item($item){
    //print_r($item);
    $this->smarty->assign('producto',$item);
    $this->smarty->display('item.tpl');
  }


}



?>
