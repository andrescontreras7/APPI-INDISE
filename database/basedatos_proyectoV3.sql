/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.32-MariaDB : Database - indise_proyecto
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`indise_proyecto` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `indise_proyecto`;

/*Table structure for table `acudientes` */

DROP TABLE IF EXISTS `acudientes`;

CREATE TABLE `acudientes` (
  `id_acu` int(11) NOT NULL COMMENT 'identificación de acudiente',
  `nom_acu` varchar(100) NOT NULL COMMENT 'nombre de acudiente',
  `ape_acu` varchar(100) NOT NULL COMMENT 'apellido de acudiente',
  `corr_acu` varchar(100) NOT NULL COMMENT 'correo de acudiente de acudiente',
  `tel_acu` varchar(100) NOT NULL COMMENT 'teléfono de acudiente',
  `activo` tinyint(1) DEFAULT NULL COMMENT 'campo que define el esatdo para eliminado logico',
  `createdAt` datetime DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` datetime DEFAULT NULL COMMENT 'fecha de actualizacion',
  `UUId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id_acu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `acudientes` */

insert  into `acudientes`(`id_acu`,`nom_acu`,`ape_acu`,`corr_acu`,`tel_acu`,`activo`,`createdAt`,`updatedAt`,`UUId`) values 
(1,'Martha sarate','Apellido del acudiente','correo@example.com','322900908',1,'2024-03-27 00:45:14','2024-03-27 00:45:14','9cfda3de-f852-4529-a8c4-d04cfa23cd0a'),
(1222,'Jhonny alberto','casstillo','email@examples.com','322577236',0,'2024-03-21 02:33:55','2024-03-21 02:51:57',NULL),
(12323,'Jose antonnio','ortega','correoexamples@gmail.com','323456789',1,'2024-04-11 00:18:42','2024-04-11 00:18:42','21bd6955-02f0-4654-abc7-23f2cbe5d7c6'),
(32132,'Miguel lopez','costa','costa@hotmail.com','322323223',1,'2024-04-11 09:15:29','2024-04-11 09:15:40',NULL),
(34545,'Carlos arturo','bacca','carlos@outlook.com','349994933',1,'2024-04-11 09:15:32','2024-04-11 09:15:42',NULL),
(321343,'Yoiner david','ternoa','andresds@gmail.com','320200393',1,'2024-04-11 09:15:34','2024-04-11 09:15:44',NULL),
(4234234,'Jefrey david','seballos','jefrey@outlook.com','322267277',1,'2024-04-11 09:15:36','2024-04-11 09:15:46',NULL),
(4343553,'Danitza paola','castro','danitza@gmail.com','328828889',1,'2024-04-11 09:15:38','2024-04-11 09:15:48',NULL);

/*Table structure for table `areas` */

DROP TABLE IF EXISTS `areas`;

CREATE TABLE `areas` (
  `cod_area` int(11) NOT NULL,
  `are_nombre` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`cod_area`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `areas` */

insert  into `areas`(`cod_area`,`are_nombre`,`activo`,`createdAt`,`updatedAt`) values 
(0,NULL,NULL,NULL,'2024-04-11'),
(23,'sociales',NULL,NULL,NULL),
(43,'matematicas',1,'2024-04-11','2024-04-11'),
(45,'etica valores',1,'2024-04-11','2024-04-11'),
(56,'ciencias economicas',1,'2024-04-11','2024-04-11'),
(67,'idiomas',1,'2024-04-11','2024-04-11'),
(321321,'ciencias naturales',1,'2024-04-11','2024-04-11'),
(432333,'literatura',1,'2024-04-11','2024-04-11'),
(4231213,'artes',1,'2024-04-11',NULL);

/*Table structure for table `asignaturas` */

DROP TABLE IF EXISTS `asignaturas`;

CREATE TABLE `asignaturas` (
  `asigcod` int(11) NOT NULL COMMENT 'Codigo de la asignatura',
  `asignombre` varchar(30) DEFAULT NULL COMMENT 'Nombre de la asignatura',
  `asigdescripcion` varchar(100) DEFAULT NULL COMMENT 'Descripción de la asignatura',
  `areaFK` int(11) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`asigcod`),
  KEY `area_fk` (`areaFK`),
  CONSTRAINT `asignaturas_ibfk_1` FOREIGN KEY (`areaFK`) REFERENCES `areas` (`cod_area`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asignaturas` */

insert  into `asignaturas`(`asigcod`,`asignombre`,`asigdescripcion`,`areaFK`,`activo`,`createdAt`,`updatedAt`) values 
(323,'biologia','tecnica',321321,1,'2024-03-20','2024-03-20'),
(2323,'ingles','tecnica',67,1,'2024-04-11','2024-04-11'),
(123213,'geometria','tecnica',43,1,'2024-04-11','2024-04-11'),
(312312,'naturales','tecnica',321321,1,'2024-04-11','2024-04-11'),
(321312,'desarrollo politico','tecnica',23,1,'2024-04-11','2024-04-11'),
(423324,'manualidades','letiva',4231213,1,'2024-04-11','2024-04-11'),
(423431,'analisis literario','lectiva',432333,1,'2024-04-11','2024-04-11'),
(2147483647,'castellano','tecnica',67,1,'2024-04-11',NULL);

/*Table structure for table `asistencia_funcionario` */

DROP TABLE IF EXISTS `asistencia_funcionario`;

CREATE TABLE `asistencia_funcionario` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT COMMENT 'codigo',
  `hora_entrada` datetime DEFAULT NULL COMMENT 'hora en la que entra',
  `hora_salida` datetime DEFAULT NULL COMMENT 'hora en la que sale',
  `huellaFK` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `aisetencia_funcionarioFK` (`huellaFK`),
  CONSTRAINT `asistencia_funcionario_ibfk_1` FOREIGN KEY (`huellaFK`) REFERENCES `huella` (`id_huella`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asistencia_funcionario` */

/*Table structure for table `asistencias_estudiantes` */

DROP TABLE IF EXISTS `asistencias_estudiantes`;

CREATE TABLE `asistencias_estudiantes` (
  `cod_asi` int(11) NOT NULL COMMENT 'código asistencia',
  `fec_asi` date NOT NULL COMMENT 'fecha asistencia',
  `det_asi` varchar(100) NOT NULL COMMENT 'detalle asistencia',
  `estudidfk` int(11) DEFAULT NULL,
  `grupoFK` int(11) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_asi`),
  KEY `estudidfk` (`estudidfk`),
  KEY `grupoFK` (`grupoFK`),
  CONSTRAINT `asistencias_estudiantes_ibfk_1` FOREIGN KEY (`estudidfk`) REFERENCES `estudiantes` (`estudid`),
  CONSTRAINT `asistencias_estudiantes_ibfk_2` FOREIGN KEY (`grupoFK`) REFERENCES `grupos` (`grupcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asistencias_estudiantes` */

insert  into `asistencias_estudiantes`(`cod_asi`,`fec_asi`,`det_asi`,`estudidfk`,`grupoFK`,`activo`,`createdAt`,`updatedAt`) values 
(1,'2024-03-05','no asistio',112312334,76868,1,'2024-04-09 19:05:08','2024-04-09 19:05:06'),
(2,'2024-04-09','asistio',7654321,76868,1,'2024-04-09 19:04:44','2024-04-09 19:04:46'),
(22,'2024-03-04','si asitio',112312334,76868,1,'2024-04-09 19:05:04','2024-04-09 19:05:00'),
(23,'2024-03-02','no asistio',112312334,76868,1,'2024-04-09 19:04:59','2024-04-09 19:05:02'),
(232,'2024-03-06','asistio',112312334,2323,1,'2024-04-09 19:04:55','2024-04-09 19:04:57'),
(1212,'2024-03-01','asistio',112312334,76868,1,'2024-04-09 19:04:52','2024-04-09 19:04:53'),
(212121,'2024-03-05','no asistio',22,76868,1,'2024-04-09 19:04:48','2024-04-09 19:04:50');

/*Table structure for table `estudianteacudientes` */

DROP TABLE IF EXISTS `estudianteacudientes`;

CREATE TABLE `estudianteacudientes` (
  `estudianteEstudid` int(11) NOT NULL,
  `acudienteIdAcu` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`estudianteEstudid`,`acudienteIdAcu`),
  KEY `acudienteIdAcu` (`acudienteIdAcu`),
  CONSTRAINT `estudianteacudientes_ibfk_1` FOREIGN KEY (`estudianteEstudid`) REFERENCES `estudiantes` (`estudid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `estudianteacudientes_ibfk_2` FOREIGN KEY (`acudienteIdAcu`) REFERENCES `acudientes` (`id_acu`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `estudianteacudientes` */

insert  into `estudianteacudientes`(`estudianteEstudid`,`acudienteIdAcu`,`activo`,`createdAt`,`updatedAt`) values 
(22,1222,1,'1970-01-23 00:00:00','0000-00-00 00:00:00'),
(112312334,321343,1,'2024-07-18 00:00:00','2024-04-11 09:07:11');

/*Table structure for table `estudiantes` */

DROP TABLE IF EXISTS `estudiantes`;

CREATE TABLE `estudiantes` (
  `estudid` int(15) NOT NULL COMMENT 'Identificación del estudiante',
  `estudnombre` varchar(100) DEFAULT NULL COMMENT 'Nombre del estudiante',
  `estudapellido` varchar(111) DEFAULT NULL COMMENT 'Apellido del estudiante',
  `estuddireccion` varchar(111) DEFAULT NULL COMMENT 'Direccion del estudiante',
  `estudcorreo` varchar(111) DEFAULT NULL COMMENT 'Correo del estudiante',
  `estudtelefono` int(11) NOT NULL COMMENT 'Telefono del estudiante',
  `rol` int(11) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `tok` int(100) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `grupoFK` int(100) DEFAULT NULL,
  PRIMARY KEY (`estudid`),
  KEY `rol` (`rol`),
  KEY `grupoFK` (`grupoFK`),
  CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `roles` (`id_rol`),
  CONSTRAINT `estudiantes_ibfk_2` FOREIGN KEY (`grupoFK`) REFERENCES `grupos` (`grupcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`estudid`,`estudnombre`,`estudapellido`,`estuddireccion`,`estudcorreo`,`estudtelefono`,`rol`,`password`,`tok`,`createdAt`,`updatedAt`,`activo`,`grupoFK`) values 
(22,'luna','bohada','las malvinas','mr.coco1420@gmail.comss',38899897,3,'$2a$04$5WDt9cuMp8cUeEcUEpC.aO3dI83OaoDZJdypgpl4mGWEQLx4ZnXkC',28382,'2024-03-21','2024-04-11',0,NULL),
(133,'joao','cancelo','el country','joa@gmail.com',32323232,3,'$2a$04$tWdvp48ZlXihdgloGL5jdu4FZcWLM9ORXAnlTaGwclEkwC5InsAY6',NULL,'0000-00-00','0000-00-00',1,NULL),
(222,'mario','castro','girasoles','mario0@gmail.com',32323232,3,'$2a$04$ZMePt0Tg3tHs/Mv/tm.KWeO7qCq.Bi3gR4o2bxlaBmKnqq7N11pVa',50777,'2024-03-31','2024-04-11',0,NULL),
(5345345,'Andres ','cavadia contreras','la union ','mr.coco1420@gmail.com',32232323,3,'$2a$04$hmJNxPBc6NjEfG9yPlDQbOw.o.uyH3jgw92ADnEqe4GjXTVFFB6gG',61728,'2024-04-09','2024-04-09',1,NULL),
(7654321,'pepito','Martinez Lopez','Avenida Principal','mr.coco14202@gmail.com',2147483647,3,'$2a$04$ixzqEYsNzD6BfwKtim9.JuedGOEu1fIsvA1RJ9zjlHi622njNbAmi',36231,'2024-04-09','2024-04-11',1,NULL),
(112312334,'Andres','cavadia','ciudadela','cavadia@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(123123123,'valeria','bohada','valle country','valerai@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(123123214,'valentina','mestre','valle country','mestre@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(123232374,'camila','acosta','turbaco','acosta@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(123423355,'guillo','florex','las nieves','guilllo@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(123446677,'amanda gaonzales ','da silva',' los almendros','amanda@gmail.com',2147483647,3,'$2a$04$BoqBBc1UIbGza/8uJC9ChuKwAQDGXlIQmuBVs1pRCzgKFJqp3Ovz2',63344,'2024-04-28','2024-04-28',1,76868),
(134232423,'miguel','cervantes','country','cervantes@outlook.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL),
(1129534251,'ismael','sarabia','12 ','isma@gmail.com',2147483647,3,'$2a$04$XSNV1qhwIk2JF7ep5sFnEuD2K5PuRPxMTyF06HVJtA/YbARSJceWe',NULL,'0000-00-00','0000-00-00',1,76868),
(2147483647,'luz','sena','7 de abril','dina@gmail.com',3244564,3,'$2a$04$hZdjFBtImwLp/lPHhj3viOyr4lSyj5uWaxit8m.LsU7qpuuWUgIh2',NULL,'0000-00-00','0000-00-00',1,76868);

/*Table structure for table `evaluaciones` */

DROP TABLE IF EXISTS `evaluaciones`;

CREATE TABLE `evaluaciones` (
  `codigo` varchar(36) NOT NULL,
  `nombre_tipo_evaluacion` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `evaluaciones` */

insert  into `evaluaciones`(`codigo`,`nombre_tipo_evaluacion`,`descripcion`,`activo`,`createdAt`,`updatedAt`) values 
('f0399789-6d2e-4ad2-bac3-c220fc18c058','Nombre de la evaluación','Descripción de la evaluación',0,'2024-03-27 19:30:28','2024-03-27 19:37:04');

/*Table structure for table `excusa` */

DROP TABLE IF EXISTS `excusa`;

CREATE TABLE `excusa` (
  `cod_exc` int(11) NOT NULL COMMENT 'código excusa',
  `fec_reg_exc` date NOT NULL COMMENT 'fecha registro excusa',
  `mot_reg_exc` varchar(200) NOT NULL COMMENT 'motivo registro excusa',
  `id_persona` int(11) DEFAULT NULL,
  `tipo_persona` enum('Estudiante','Docente','otro') DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_exc`),
  KEY `id_persona` (`id_persona`),
  CONSTRAINT `excusa_ibfk_3` FOREIGN KEY (`id_persona`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `excusa_ibfk_4` FOREIGN KEY (`id_persona`) REFERENCES `estudiantes` (`estudid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `excusa` */

/*Table structure for table `funcionario` */

DROP TABLE IF EXISTS `funcionario`;

CREATE TABLE `funcionario` (
  `funcid` int(11) NOT NULL COMMENT 'Identificación del funcionario',
  `funcnombre` varchar(30) DEFAULT NULL COMMENT 'Nombre del funcionario',
  `funcapellido` varchar(30) DEFAULT NULL COMMENT 'Apellido del funcionario',
  `funccorreo` varchar(30) DEFAULT NULL COMMENT 'Correo del funcionario',
  `funcrol` enum('','docente','Coordinador') DEFAULT NULL COMMENT 'Rol del funcionario',
  `passwordFuncionario` varchar(100) NOT NULL COMMENT 'Contraseña del funcionario',
  `jefe_areaFK` int(11) DEFAULT NULL COMMENT 'jefe de area',
  `telefono` int(11) DEFAULT NULL COMMENT 'telefono funcionario',
  `rolFK` int(11) DEFAULT NULL COMMENT 'rol',
  `activo` tinyint(1) DEFAULT NULL COMMENT 'Estado de la tabla para aliminado logico',
  `createdAt` date DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` date DEFAULT NULL COMMENT 'fecha de actualizacion',
  PRIMARY KEY (`funcid`),
  KEY `jefe_areaFK` (`jefe_areaFK`),
  KEY `rolFK` (`rolFK`),
  CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`jefe_areaFK`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `funcionario_ibfk_2` FOREIGN KEY (`rolFK`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `funcionario` */

insert  into `funcionario`(`funcid`,`funcnombre`,`funcapellido`,`funccorreo`,`funcrol`,`passwordFuncionario`,`jefe_areaFK`,`telefono`,`rolFK`,`activo`,`createdAt`,`updatedAt`) values 
(0,NULL,NULL,NULL,NULL,'',NULL,NULL,NULL,NULL,NULL,NULL),
(4443,'maria','paternina','pa@gmail.com','Coordinador','$2a$04$ioBcqYcOGh6s8ws0iHaLqOzoMZYQ2U9HFurM9W.PgEwVDCUc.EhNy',33424,2147483647,1,0,'2024-04-11','2024-04-11'),
(23213,'camila','gonzales','camila@gmail.com','Coordinador','$2a$04$FNmw5jr64xRzCc5Dr8E/6efUi2ixyLh/9C50cudWYVXf/uqFyDIZS',33424,2147483647,1,1,'2024-03-23','2024-03-23'),
(32434,'marco','lopez','lopez@gmail.com','docente','sdffdsf',33424,320239230,2,1,NULL,NULL),
(33424,'luis','contreras','contreras@gmail.com','Coordinador','fsdfsd',NULL,324233333,1,1,'2024-04-11','2024-04-11'),
(43243,'estafanny','regino','regino@gmail.com','docente','fsdfds',33424,320684011,2,1,'2024-04-11','2024-04-11'),
(123123,'jose','castro','castro@gmail.com','docente','fsdffds',33424,323432324,2,1,'2024-04-11','2024-04-11'),
(432432,'julio','martinez','martinez@gmail.com','docente','fsdfsdf',33424,334325325,2,1,'2024-04-11','2024-04-11'),
(11295345,'marco','ortiz','marco@gmail.com','docente','$2a$04$JBCYcWRyh381HcfRvutsk.6GLm2T4xnR.7jzkETzXmbC5pgCy88p6',33424,2147483647,2,1,'2024-04-11','2024-04-11'),
(72041132,'Andrea','cavadia','andrea@gmail.com','Coordinador','$2a$04$P7UtGtll3wCikXQrxtkzIuz7MCBVrd2o.6iHbMsVsDJKB6fP6N3DC',33424,2147483647,1,1,'2024-04-28','2024-04-28'),
(123123213,'cecilia','nuñez','cecilianuñez@gmail.com','docente','hhhhhfgh',33424,322577235,1,1,'2024-04-11','2024-04-11'),
(2147483647,'Andres','cavadia','contrerass@gmail.com','Coordinador','$2a$04$/uM6lEQqeXcx7XDg2lI5s.DPv2rIT0Mcs8YCQsCDiqInuqmVUNAtG',33424,2147483647,1,1,NULL,NULL);

/*Table structure for table `funcionario_asignatura` */

DROP TABLE IF EXISTS `funcionario_asignatura`;

CREATE TABLE `funcionario_asignatura` (
  `funcionarioID` int(11) NOT NULL,
  `asignaturaID` int(11) NOT NULL,
  PRIMARY KEY (`funcionarioID`,`asignaturaID`),
  KEY `asignaturaID` (`asignaturaID`),
  CONSTRAINT `funcionario_asignatura_ibfk_1` FOREIGN KEY (`funcionarioID`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `funcionario_asignatura_ibfk_2` FOREIGN KEY (`asignaturaID`) REFERENCES `asignaturas` (`asigcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `funcionario_asignatura` */

insert  into `funcionario_asignatura`(`funcionarioID`,`asignaturaID`) values 
(32434,123213),
(43243,312312),
(123123,321312),
(432432,423324),
(123123213,423431);

/*Table structure for table `grado` */

DROP TABLE IF EXISTS `grado`;

CREATE TABLE `grado` (
  `grado_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `grado_id` varchar(11) NOT NULL,
  `nombre_grado` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `año_escolar` datetime DEFAULT NULL,
  `periodo_FK` varchar(100) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAT` datetime DEFAULT NULL,
  `updatedAT` datetime DEFAULT NULL,
  PRIMARY KEY (`grado_id`),
  KEY `grado_codigo` (`grado_codigo`),
  KEY `periodo_PK` (`periodo_FK`),
  CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`periodo_FK`) REFERENCES `periodos` (`periodo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `grado` */

insert  into `grado`(`grado_codigo`,`grado_id`,`nombre_grado`,`descripcion`,`año_escolar`,`periodo_FK`,`activo`,`createdAT`,`updatedAT`) values 
(212,'21321','decimo','nada ','2024-04-29 08:54:32','9a322587-6370-4daf-9a89-b8c4a3550a71',1,'2024-04-29 08:54:42','2024-04-29 08:54:46');

/*Table structure for table `grupo_estudiante` */

DROP TABLE IF EXISTS `grupo_estudiante`;

CREATE TABLE `grupo_estudiante` (
  `grupcod` int(11) NOT NULL,
  `estudid` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`grupcod`,`estudid`),
  KEY `estudid` (`estudid`),
  CONSTRAINT `grupo_estudiante_ibfk_1` FOREIGN KEY (`grupcod`) REFERENCES `grupos` (`grupcod`),
  CONSTRAINT `grupo_estudiante_ibfk_2` FOREIGN KEY (`estudid`) REFERENCES `estudiantes` (`estudid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `grupo_estudiante` */

/*Table structure for table `grupos` */

DROP TABLE IF EXISTS `grupos`;

CREATE TABLE `grupos` (
  `grupcod` int(11) NOT NULL COMMENT 'Codigo del grupo',
  `grupsalon` varchar(30) DEFAULT NULL COMMENT 'Salon del grupo',
  `directorFK` int(11) DEFAULT NULL COMMENT 'foranea de directror de grupo',
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `grado_FK` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`grupcod`),
  KEY `directorFK` (`directorFK`),
  KEY `grado_FK` (`grado_FK`),
  CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`directorFK`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `grupos_ibfk_2` FOREIGN KEY (`grado_FK`) REFERENCES `grado` (`grado_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `grupos` */

insert  into `grupos`(`grupcod`,`grupsalon`,`directorFK`,`activo`,`createdAt`,`updatedAt`,`grado_FK`) values 
(2323,'6A',4443,NULL,NULL,NULL,NULL),
(9898,'7B',4443,NULL,NULL,NULL,NULL),
(53536,'8C',123123213,NULL,NULL,NULL,NULL),
(58499,'9A',NULL,NULL,NULL,NULL,NULL),
(76868,'10A',NULL,NULL,NULL,NULL,NULL),
(12324223,'1B',4443,NULL,NULL,NULL,NULL);

/*Table structure for table `horaslaboradas` */

DROP TABLE IF EXISTS `horaslaboradas`;

CREATE TABLE `horaslaboradas` (
  `codigo` int(20) NOT NULL COMMENT 'codifo de horas',
  `hora_entrada` datetime DEFAULT NULL COMMENT 'hora de entrada',
  `hora_salida` datetime DEFAULT NULL COMMENT 'hora de salida',
  `horas_t_semana` int(11) DEFAULT NULL COMMENT 'horas trabajadas semanales',
  `fecha_registro` date DEFAULT NULL COMMENT 'fecha de registro de horas',
  `funcidfk` int(11) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `UUId` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `funcidfk` (`funcidfk`),
  CONSTRAINT `horaslaboradas_ibfk_1` FOREIGN KEY (`funcidfk`) REFERENCES `funcionario` (`funcid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `horaslaboradas` */

insert  into `horaslaboradas`(`codigo`,`hora_entrada`,`hora_salida`,`horas_t_semana`,`fecha_registro`,`funcidfk`,`activo`,`createdAt`,`updatedAt`,`UUId`) values 
(1234,'2023-11-29 12:54:12','2023-11-01 16:06:40',5,'2023-11-01',33424,NULL,NULL,NULL,NULL),
(2344,'2023-11-23 11:53:57','2023-11-01 15:54:18',6,'2023-11-01',123123,NULL,NULL,NULL,NULL),
(2345,'2023-11-01 15:54:04','2023-11-01 19:54:32',7,'2023-11-01',432432,NULL,NULL,NULL,NULL),
(5677,'2023-11-01 11:54:01','2023-11-01 17:54:27',8,'2023-11-01',123123213,NULL,NULL,NULL,NULL),
(8908,'2023-11-01 09:54:08','2023-11-01 14:54:37',4,'2023-11-01',33424,NULL,NULL,NULL,NULL);

/*Table structure for table `huella` */

DROP TABLE IF EXISTS `huella`;

CREATE TABLE `huella` (
  `id_huella` int(100) NOT NULL,
  `plantilla biometrica` varchar(100) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_huella`),
  CONSTRAINT `huella_ibfk_2` FOREIGN KEY (`id_huella`) REFERENCES `funcionario` (`funcid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `huella` */

insert  into `huella`(`id_huella`,`plantilla biometrica`,`estado`) values 
(32434,'dactilar','activo'),
(33424,'le falta un dedo','activo'),
(43243,'sapo','nulo'),
(123123,'dactilar','inactivo'),
(123123213,'dactilar','activo');

/*Table structure for table `notas` */

DROP TABLE IF EXISTS `notas`;

CREATE TABLE `notas` (
  `codigo` int(11) NOT NULL,
  `id_estudianteFK` int(11) DEFAULT NULL,
  `id_asignaturaFK` int(11) DEFAULT NULL,
  `id_evaluacionFK` varchar(36) DEFAULT NULL,
  `nota` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `id_estudianteFK` (`id_estudianteFK`),
  KEY `id_asignaturaFK` (`id_asignaturaFK`),
  KEY `id_evaluacionFK` (`id_evaluacionFK`),
  CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`id_estudianteFK`) REFERENCES `estudiantes` (`estudid`),
  CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`id_asignaturaFK`) REFERENCES `asignaturas` (`asigcod`),
  CONSTRAINT `notas_ibfk_3` FOREIGN KEY (`id_evaluacionFK`) REFERENCES `tipo evaluacion` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `notas` */

insert  into `notas`(`codigo`,`id_estudianteFK`,`id_asignaturaFK`,`id_evaluacionFK`,`nota`,`createdAt`,`updatedAt`,`activo`) values 
(0,123123123,423431,'3456',4,NULL,NULL,NULL),
(1234,123123123,423324,'1234',2,NULL,NULL,NULL),
(3456,123123123,321312,'987',3,NULL,NULL,NULL),
(4356,123123123,423431,'3456',5,NULL,NULL,NULL),
(4520,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(5453,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `observadors` */

DROP TABLE IF EXISTS `observadors`;

CREATE TABLE `observadors` (
  `obsvcod` varchar(36) NOT NULL COMMENT 'Codigo del observador',
  `obsvtipo` varchar(30) DEFAULT NULL COMMENT 'Tipo de observador',
  `obsvfecha` date DEFAULT NULL COMMENT 'Fecha del observador',
  `obsvestado` varchar(30) DEFAULT NULL COMMENT 'Estado del observador',
  `estudid` int(11) DEFAULT NULL,
  `funcidfv` int(11) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`obsvcod`),
  KEY `funcidfv` (`funcidfv`),
  KEY `estudid` (`estudid`),
  CONSTRAINT `observadors_ibfk_1` FOREIGN KEY (`funcidfv`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `observadors_ibfk_2` FOREIGN KEY (`estudid`) REFERENCES `estudiantes` (`estudid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `observadors` */

insert  into `observadors`(`obsvcod`,`obsvtipo`,`obsvfecha`,`obsvestado`,`estudid`,`funcidfv`,`activo`,`createdAt`,`updatedAt`) values 
('edf20a1e-9c4b-4e8d-a1da-125a44f41ab4','convivencia','2022-01-01','Activo',133,4443,1,'2024-03-27 03:29:49','2024-03-27 18:46:02'),
('f95c2a77-9d5a-4013-9204-ea4362578fdd','academico','2022-01-01','Activo',133,4443,1,'2024-03-27 03:32:02','2024-03-27 03:32:02'),
('fa01e7f7-e500-4e05-8af9-aed362989afe','q te impor','2022-01-01','Activo',133,4443,0,'2024-03-27 03:18:27','2024-03-27 03:46:06');

/*Table structure for table `periodos` */

DROP TABLE IF EXISTS `periodos`;

CREATE TABLE `periodos` (
  `periodo_codigo` int(11) NOT NULL AUTO_INCREMENT,
  `periodo_id` varchar(100) NOT NULL,
  `periodo_nombre` varchar(100) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`periodo_id`),
  KEY `periodo_codigo` (`periodo_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `periodos` */

insert  into `periodos`(`periodo_codigo`,`periodo_id`,`periodo_nombre`,`fecha_inicio`,`fecha_fin`,`activo`,`createdAt`,`updatedAt`) values 
(1,'1',NULL,NULL,NULL,NULL,NULL,NULL),
(2,'9a322587-6370-4daf-9a89-b8c4a3550a71','Periodo 1','2022-01-01 00:00:00','2022-12-31 00:00:00',1,'2024-04-28 19:13:00','2024-04-28 19:13:00'),
(4,'c6132c2c-bcd2-4ebf-95ea-a16629906ea4','Periodo 1','2022-01-01 00:00:00','2022-12-31 00:00:00',1,'2024-04-28 19:28:54','2024-04-28 19:28:54'),
(3,'ee3db2f4-e1dc-4319-a3d8-f38ce79fedbb','Periodo 1','2022-01-01 00:00:00','2022-12-31 00:00:00',1,'2024-04-28 19:27:48','2024-04-28 19:27:48');

/*Table structure for table `registro_asistencia` */

DROP TABLE IF EXISTS `registro_asistencia`;

CREATE TABLE `registro_asistencia` (
  `cod_reg_asi` int(11) NOT NULL COMMENT 'código registro asistencia',
  `fec_reg_asi` date NOT NULL COMMENT 'fecha registro asistencia',
  `hor_reg_asi` datetime NOT NULL COMMENT 'hora registro asistencia',
  `descripcion` varchar(50) NOT NULL COMMENT 'descripcion asistencia',
  `estadoasistencia` varchar(50) NOT NULL COMMENT 'estado de la asistencia',
  `cod_reg_asiFK` int(11) NOT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_reg_asi`),
  KEY `cod_reg_asiFK` (`cod_reg_asiFK`),
  CONSTRAINT `registro_asistencia_ibfk_1` FOREIGN KEY (`cod_reg_asiFK`) REFERENCES `asistencias_estudiantes` (`cod_asi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `registro_asistencia` */

/*Table structure for table `registro_asitencia_funcionario` */

DROP TABLE IF EXISTS `registro_asitencia_funcionario`;

CREATE TABLE `registro_asitencia_funcionario` (
  `hora_registro` datetime DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `estado_asistencia` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `cod_asi` int(11) NOT NULL,
  `asistenciaFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_asi`),
  KEY `asistenciaFK` (`asistenciaFK`),
  CONSTRAINT `registro_asitencia_funcionario_ibfk_1` FOREIGN KEY (`asistenciaFK`) REFERENCES `asistencia_funcionario` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `registro_asitencia_funcionario` */

/*Table structure for table `registro_excusa` */

DROP TABLE IF EXISTS `registro_excusa`;

CREATE TABLE `registro_excusa` (
  `cod_reg_excu` int(11) NOT NULL COMMENT 'código registro excusa',
  `fec_reg_excu` date NOT NULL COMMENT 'fecha registro excusa',
  `hor_reg_excu` time NOT NULL COMMENT 'hora detalle registro excusa',
  `nombre` varchar(20) NOT NULL COMMENT 'nombre del remitente',
  `apellido` varchar(50) NOT NULL COMMENT 'apellido del remitente',
  `descripcion` varchar(40) NOT NULL COMMENT 'descripcion del remitente',
  `cod_excFK` int(11) NOT NULL,
  `id_personaFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_reg_excu`),
  KEY `cod_excFK` (`cod_excFK`),
  KEY `id_personaFK` (`id_personaFK`),
  CONSTRAINT `registro_excusa_ibfk_1` FOREIGN KEY (`cod_excFK`) REFERENCES `excusa` (`cod_exc`),
  CONSTRAINT `registro_excusa_ibfk_2` FOREIGN KEY (`id_personaFK`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `registro_excusa_ibfk_3` FOREIGN KEY (`id_personaFK`) REFERENCES `estudiantes` (`estudid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `registro_excusa` */

/*Table structure for table `registro_obsv` */

DROP TABLE IF EXISTS `registro_obsv`;

CREATE TABLE `registro_obsv` (
  `regobsv_cod` varchar(36) NOT NULL COMMENT 'Codigo del registro del observador',
  `regobsv_fechareg` date DEFAULT NULL COMMENT 'Fecha del registro del observador',
  `descripcionsobservacion` varchar(50) NOT NULL COMMENT 'descripcion del observador',
  `horaobservador` datetime NOT NULL COMMENT 'horas del observador',
  `obsvcodfk` int(11) DEFAULT NULL,
  PRIMARY KEY (`regobsv_cod`),
  KEY `obsvcodfk` (`obsvcodfk`),
  CONSTRAINT `registro_obsv_ibfk_1` FOREIGN KEY (`regobsv_cod`) REFERENCES `observadors` (`obsvcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `registro_obsv` */

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `roles` */

insert  into `roles`(`id_rol`,`nombre`) values 
(1,'coordinador'),
(2,'docente'),
(3,'estudiante');

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

/*Table structure for table `tipo evaluacion` */

DROP TABLE IF EXISTS `tipo evaluacion`;

CREATE TABLE `tipo evaluacion` (
  `nombre_tipo_evaluacion` varchar(100) DEFAULT NULL,
  `codigo` varchar(36) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tipo evaluacion` */

insert  into `tipo evaluacion`(`nombre_tipo_evaluacion`,`codigo`,`descripcion`,`createdAt`,`updatedAt`,`activo`) values 
('Trabajos','0',NULL,NULL,NULL,NULL),
('proyectos','1234','evaluacion tematica final',NULL,NULL,NULL),
('desempeño academico','3456','desempeño durente el periodo',NULL,NULL,NULL),
('examenes','987','avances graficos proyecto',NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
