<?php

/**
 *
 */
class productos_model
{
  private $db;

  public function __construct()
  {
    $this->db = new PDO('mysql:host=localhost;dbname=camping_pesca_motos;charset=utf8','usuario1','123456');
  }

  public function get_products(){
    $select = $this->db->prepare("select * from productos");
    $select->execute();
    $prods=$select->fetchAll(PDO::FETCH_ASSOC);
    //print_r($prods);
    return $prods;
  }

  public function get_item($id){
    $select = $this->db->prepare("select * from productos where id=?");
    $select->execute(array($id));
    $item=$select->fetchAll(PDO::FETCH_ASSOC);
    //print_r($item);
    return $item;
  }
}






?>
