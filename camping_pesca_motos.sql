-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2016 a las 18:54:09
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
  `titulo` varchar(50) CHARACTER SET utf8 NOT NULL,
  `fecha` date NOT NULL,
  `cuerpo` varchar(2500) CHARACTER SET utf8 NOT NULL,
  `imgsrc` varchar(50) CHARACTER SET utf8 NOT NULL COMMENT 'imagen asociada a la noticia',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `fecha`, `cuerpo`, `imgsrc`) VALUES
(101, 'Nueva carpa Doite XR4', '2016-08-01', 'Diseñada como carpa profesional para 4 personas con faldón completo. Estructura de varillas de duraluminio para menor peso y mayor resistencia. Ventilacion trasera para mejor circulación del aire. Extensión frontal de cubretecho aumenta espacio útil. Cubretecho: Poliester Rip Stop, densidad 210 T, grosor fibra 68 D. Efecto de impermeabilidad de 5.000 mm, con costuras selladas y protección solar UPF 50+. Piso de Nylon 210 T/ 70 D, recubrimiento de Poliuretano de 5.000 mm. Varillas de Duraluminio de 9,5 mm (Etna 2) y 8,5 mm (Atlas 2 e Himalaya 2).', 'img/news/carpa_doite_small.jpg'),
(102, 'Camping Terra Alta Mendoza', '2016-08-12', 'Un oasis a 24 km de la ciudad de Mendoza. Piscina para adultos y niños, parque de 4000 m2; sillas, mesas y tablones para eventos. Cámaras de seguridad y cierre perimetral, WiFi y estacionamiento.', 'img/news/camp_terra.jpg'),
(103, 'Honda Relanza la NC 700X', '2016-09-21', 'Diseñada y pensada para aquellos que disfrutan de los detalles y las prestaciones de una moto de alta gama, su practicidad y adaptabilidad se respaldan en su comodidad, su robustez integral, su bajo consumo y su máximo rendimiento.\r\n\r\nDebido a la agilidad en su conducción, los bajos niveles de mantenimiento y las ruedas de fundición de aluminio, la Honda NC 700X se posiciona como la alternativa ideal para el uso urbano, deportivo o para travesías prolongadas.', 'img/news/honda_ncx700_small.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` decimal(11,2) NOT NULL,
  `descripcion` text NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `categoria`, `stock`) VALUES
(10012, 'carpa Doite Alpina XR4', '4500.00', 'Diseñada como carpa profesional para 4 personas con faldón completo. Estructura de varillas de duraluminio para menor peso y mayor resistencia. Ventilacion trasera para mejor circulación del aire. Extensión frontal de cubretecho aumenta espacio útil. Cubretecho: Poliester Rip Stop, densidad 210 T, grosor fibra 68 D. Efecto de impermeabilidad de 5.000 mm, con costuras selladas y protección solar UPF 50+. Piso de Nylon 210 T/ 70 D, recubrimiento de Poliuretano de 5.000 mm. Varillas de Duraluminio de 9,5 mm (Etna 2) y 8,5 mm (Atlas 2 e Himalaya 2).', 'carpa', 144),
(10052, 'Zapatilla Reebok Colator', '1250.00', 'Estas zapatillas convierten rendimiento en velocidad. Con un diseño ligero y ventilado que se siente veloz, además de una amortiguación y agarre supremos que derrotan las molestias. Un sistema integrado de lazada supera los problemas de ajuste y un look en capas asegura un estilo superior.\n- Parte superior de sintética y malla para transpirabilidad y apoyo listo para correr\n- Tirantes con cordones integrados en el mediopié y un diseño de corte bajo para un ajuste estable pero con movimiento', 'carpa', 24),
(10098, 'Anafe para camping', '679.00', 'Calentador a Gas mod.NKBR-6 marca Nikko\r\n\r\nCalentador a gas de garrafa descartable, fabricado en aleación de Aluminio y Magnesio de alta resistencia.\r\nEncendido electrónico.\r\nMuy liviano, muy fácil de transportar.\r\nConsumo: 140 gr/hora.\r\nTamaño desplegado: 200 de diámetro x 85 mm de alto.\r\nTamaño cerrado: 92 x 80 x 115 mm.\r\nPuede utilizar garrafas del tipo Pro-Gas de 230 grs o adquiriendo el adaptador necesario, puede utilizar los aerosoles de 227 gr.\r\nPresentación en caja de plástico.\r\nPeso: 340 gr.', 'carpa', 133),
(40012, 'Traje Neoprene Thermoskin Entero Surf Kite Buceo W', '3200.00', '- Talles S, M, L, XL y XXL (consultar stock antes de ofertar)\r\n- producto templado: recomendado para aguas con temperaturas mayores a 17°C\r\n- Flexibilidad media en parte inferior del traje y alta flexibilidad en hombros y mangas para mayor confort\r\n- Costuras no selladas\r\n- Espesores de neopreno en 3 y 2 mm', 'cania', 51),
(91112, 'Carpa De Alta Montaña Zolo Especial De Doite Dural', '3849.00', 'Carpa reforzada individual de alta montaña ZOLO de Doite.\r\nFacilo de armar y muy liviana.\r\nIncluye kit de reparacion y bolso de transporte.\r\nok', 'carpa', 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prod_images`
--

CREATE TABLE IF NOT EXISTS `prod_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_id` int(11) NOT NULL,
  `imgsrc` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `prod_images_productos` (`prod_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- Volcado de datos para la tabla `prod_images`
--

INSERT INTO `prod_images` (`id`, `prod_id`, `imgsrc`) VALUES
(5, 10098, 'img/prods/5805aeb224b34anafe1.jpg'),
(6, 10098, 'img/prods/5805aeb2252b1anafe2.jpg'),
(7, 10098, 'img/prods/5805aeb2259fbanafe3.jpg'),
(8, 91112, 'img/prods/58093595502bfcarpa-de-alta-montana-zolo-especial-de-doite.jpg'),
(9, 91112, 'img/prods/580935955be45carpa-de-alta-montana-zolo-especial-de-doite-duraluminio.jpg'),
(10, 91112, 'img/prods/58093595625cdcarpa-de-alta-montana-zolo-especial-de-doite-duraluminio-v.jpg'),
(11, 10052, 'img/prods/580ed8d15a3d6zapatillas-reebok-colator-x-arriba.jpg'),
(12, 10052, 'img/prods/580ed8d15b8c6zapatillas-reebok-colator-x-back.jpg'),
(13, 10052, 'img/prods/580ed8d158df9zapatillas-reebok-colator-x.jpg'),
(14, 40012, 'img/prods/580ed59432f66traje-neoprene-buceo.jpg'),
(15, 40012, 'img/prods/580ed59433cfctraje-neoprene-thermoskin.jpg');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prod_images`
--
ALTER TABLE `prod_images`
  ADD CONSTRAINT `prod_images_productos` FOREIGN KEY (`prod_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
