-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-10-2016 a las 02:19:48
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `camping_pesca_motos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  `cuerpo` varchar(2500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `fecha`, `cuerpo`) VALUES
(101, 'Nueva carpa Doite XR4', '2016-08-01', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi culpa facilis aliquam eveniet odit odio, non eligendi ad quam alias, quae modi dignissimos autem animi maxime aut minus quos et'),
(102, 'Top 10 Campings de la Patagonia', '2016-08-12', 'Los10 campings de la patagonia bla bla....Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi culpa facilis aliquam eveniet odit odio, non eligendi ad quam alias, quae modi dignissimos autem animi maxime aut minus quos et');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL DEFAULT '0' COMMENT 'el id del producto',
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'el nombre',
  `precio` decimal(11,2) NOT NULL COMMENT 'el precio',
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'la descripcion',
  `categoria` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'la categoria del prod',
  `imgsrc` varchar(60) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'el source de la img descriptiva',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `categoria`, `imgsrc`) VALUES
(10012, 'carpa Doite Alpina XR4', '3575.50', 'Diseñada como carpa profesional para 4 personas con faldón completo. Estructura de varillas de duraluminio para menor peso y mayor resistencia. Ventilacion trasera para mejor circulación del aire. Extensión frontal de cubretecho aumenta espacio útil. Cubretecho: Poliester Rip Stop, densidad 210 T, grosor fibra 68 D. Efecto de impermeabilidad de 5.000 mm, con costuras selladas y protección solar UPF 50+. Piso de Nylon 210 T/ 70 D, recubrimiento de Poliuretano de 5.000 mm. Varillas de Duraluminio de 9,5 mm (Etna 2) y 8,5 mm (Atlas 2 e Himalaya 2).', 'carpa', 'img/productos/doitexr4.jpg'),
(10013, 'Waterdog Aconcagua Plus', '5138.90', 'Carpa familiar con capacidad para 4 personas. Medida exterior 210 x 310 x 130 cm. Tejido exterior e interior Poliéster 75D / 185T. Piso Polietileno 100% PE SHEET 10 x 10 125 g/m2. Columna de Agua 1000 mm P.U. Mosquitero Poly Mesh No See Um. Estructura fibra de vidrio 7.9 mm. Peso de 4,330 kg. Costuras reforzadas termoselladas. Cubretecho hasta el piso. Con 2 entradas y 2 ábsides. Cierres reforzados. Tirantes para vientos. Bolso con correa de transporte.', 'carpa', 'img/productos/aconcagua_plus.jpg'),
(10014, 'Coleman Xpedition 2 personas', '7250.00', ' Sobretecho con P.U con extencion frontal y posterior para la lluvia. Piso impermeable, Tela, cierres e hilos a prueba de agua. Varillas de fibra de vidrio para un armado rapido. Mosquiteros interiores grandes para mejor ventilacion. Bolsa de transporte\r\n \r\nAlto: 1.21 mt\r\nAncho: 1.52 mt\r\nLargo: 2.13 mt\r\n \r\nIncluye  bolso de transporte.\r\nPeso total 3,800kgs.\r\nLas medidas en su bolso son:65x15x15cm\r\n* Tecnologia WHATER TEC. Resistente a climas de tormentas.\r\n* Sobretecho para mayor resitencia al frio.Ventanas en techo.\r\n* Piso impermeable (costuras celladas contra filtraciones de agua).\r\n* Costuras invertidas impiden filtracion de agua.\r\n* Tela repelenta al agua e impermeabilizada.\r\n* Ventanas laterales se pueden cerrar o abrir segun clima.\r\n* Costura a prueba de goteo. \r\n* Mosquiteros interiores en sus ventanas.\r\n* Bolsillos internos para guardar objetos chicos.\r\n* Bolsa de transporte. \r\n* Estacas. \r\n', 'carpa', 'img/productos/coleman_xp2.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
