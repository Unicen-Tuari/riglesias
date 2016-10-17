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

  public function copyImage($image){
    $path = '../img/prods/'.uniqid().$image["name"];
    move_uploaded_file($image["tmp_name"], $path);
    return $path;
  }

  public function add_prod($id,$nombre,$cat,$precio,$stock,$descr,$arr_img){
    // echo "id=".$id."nombre=".$nombre."cat=".$cat."precio=".$precio."stock=".$stock."descripcion=".$descr;
    $insert = $this->db->prepare("INSERT INTO productos(id,nombre,precio,descripcion,categoria,stock) VALUES(?,?,?,?,?,?)");
    $insert->execute(array($id,$nombre,$precio,$descr,$cat,$stock));

    foreach ($arr_img as $image){
      $path_image =  $this->copyImage($image);
      $insert = $this->db->prepare("INSERT INTO prod_images(id, prod_id, imgsrc) VALUES(?,?,?)");
      $insert->execute(array(null,$id,$path_image));
    }



  }
}






?>
