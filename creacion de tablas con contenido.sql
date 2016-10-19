-- Table: productos
CREATE TABLE productos (
   id int  NOT NULL,
   nombre varchar(50)  NOT NULL,
   precio decimal(11,2)  NOT NULL,
   descripcion text  NOT NULL,
   categoria varchar(30)  NOT NULL,
   stock int  NOT NULL,
   CONSTRAINT id PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Datos de productos
INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `categoria`, `stock`) VALUES
(10012, 'carpa Doite Alpina XR4', '3575.50', 'Diseñada como carpa profesional para 4 personas con faldón completo. Estructura de varillas de duraluminio para menor peso y mayor resistencia. Ventilacion trasera para mejor circulación del aire. Extensión frontal de cubretecho aumenta espacio útil. Cubretecho: Poliester Rip Stop, densidad 210 T, grosor fibra 68 D. Efecto de impermeabilidad de 5.000 mm, con costuras selladas y protección solar UPF 50+. Piso de Nylon 210 T/ 70 D, recubrimiento de Poliuretano de 5.000 mm. Varillas de Duraluminio de 9,5 mm (Etna 2) y 8,5 mm (Atlas 2 e Himalaya 2).', 'carpa', 38),
(10013, 'Waterdog Aconcagua Plus', '5138.90', 'Carpa familiar con capacidad para 4 personas. Medida exterior 210 x 310 x 130 cm. Tejido exterior e interior Poliéster 75D / 185T. Piso Polietileno 100% PE SHEET 10 x 10 125 g/m2. Columna de Agua 1000 mm P.U. Mosquitero Poly Mesh No See Um. Estructura fibra de vidrio 7.9 mm. Peso de 4,330 kg. Costuras reforzadas termoselladas. Cubretecho hasta el piso. Con 2 entradas y 2 ábsides. Cierres reforzados. Tirantes para vientos. Bolso con correa de transporte.', 'carpa', 14),
(10014, 'Coleman Xpedition 2 personas', '7250.00', ' Sobretecho con P.U con extencion frontal y posterior para la lluvia. Piso impermeable, Tela, cierres e hilos a prueba de agua. Varillas de fibra de vidrio para un armado rapido. Mosquiteros interiores grandes para mejor ventilacion. Bolsa de transporte\r\n \r\nAlto: 1.21 mt\r\nAncho: 1.52 mt\r\nLargo: 2.13 mt\r\n \r\nIncluye  bolso de transporte.\r\nPeso total 3,800kgs.\r\nLas medidas en su bolso son:65x15x15cm\r\n* Tecnologia WHATER TEC. Resistente a climas de tormentas.\r\n* Sobretecho para mayor resitencia al frio.Ventanas en techo.\r\n* Piso impermeable (costuras celladas contra filtraciones de agua).\r\n* Costuras invertidas impiden filtracion de agua.\r\n* Tela repelenta al agua e impermeabilizada.\r\n* Ventanas laterales se pueden cerrar o abrir segun clima.\r\n* Costura a prueba de goteo. \r\n* Mosquiteros interiores en sus ventanas.\r\n* Bolsillos internos para guardar objetos chicos.\r\n* Bolsa de transporte. \r\n* Estacas. \r\n', 'carpa', 8),
(22001, 'Caña de pescar Waterdog con Reel 3mts', '988.00', 'Caña Waterdog \r\nVirtual 3007 \r\nTelescópica 3,00 m.\r\n\r\nPasahilos de cerámica\r\n\r\nPortareel a cremallera\r\n\r\nPara plomada de 10 a 30 g.\r\nReel Core 202\r\n2 Rulemanes de Presición\r\n• Freno delantero. \r\n• Carretel de grafito alivianado. \r\n• Cuerpo de grafito. \r\n. Carretel adicional de grafito\r\n.Manivela reversible\r\n1 Rollo de Tanza incluído', 'caña de pescar', 114);



-- Table: prod_images
CREATE TABLE IF NOT EXISTS `prod_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `imgsrc` varchar(60) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

-- Constraints for table `prod_images`
--
ALTER TABLE `prod_images`
  ADD CONSTRAINT `prod_images_productos` FOREIGN KEY (`prod_id`) REFERENCES `productos` (`id`);
  

-- Contenido para prod_images
INSERT INTO `prod_images` (`id`, `prod_id`, `imgsrc`) VALUES
(1, 10012, 'img/prods/img01.jpg'),
(2, 10012, 'img/prods/img02.jpg'),
(3, 10013, 'img/prods/img01.jpg');