<?php
require('view/noticia_view.php');
require('model/noticia_model.php');

/**
 * class noticias
 */
class noticia_controller
{
  private $noticia_view;
  private $noticia_model;

  public function __construct(){
    $this->noticia_view = new noticia_view();
    $this->noticia_model = new noticia_model();
  }

  public function show_news(){
    $noticias = $this->noticia_model->get_noticias();
    $this->noticia_view->show($noticias);
  }

  // en STANDBY pq no existe el form de html, primero voy a hacer otras cosas
  // public function create_news(){
  //   $titulo=$_POST['titulo'];
  //   $fecha=$_POST['fecha'];
  //   $this->noticia_model->set_noticia($noticia);
  //
  // }
}

?>
