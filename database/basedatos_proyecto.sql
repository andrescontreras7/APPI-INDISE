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
  `nom_acu` varchar(255) NOT NULL,
  `ape_acu` varchar(255) NOT NULL,
  `corr_acu` varchar(255) NOT NULL,
  `tel_acu` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UUId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id_acu`),
  UNIQUE KEY `corr_acu` (`corr_acu`),
  UNIQUE KEY `corr_acu_2` (`corr_acu`),
  UNIQUE KEY `corr_acu_3` (`corr_acu`),
  UNIQUE KEY `corr_acu_4` (`corr_acu`),
  UNIQUE KEY `corr_acu_5` (`corr_acu`),
  UNIQUE KEY `corr_acu_6` (`corr_acu`),
  UNIQUE KEY `corr_acu_7` (`corr_acu`),
  UNIQUE KEY `corr_acu_8` (`corr_acu`),
  UNIQUE KEY `corr_acu_9` (`corr_acu`),
  UNIQUE KEY `corr_acu_10` (`corr_acu`),
  UNIQUE KEY `corr_acu_11` (`corr_acu`),
  UNIQUE KEY `corr_acu_12` (`corr_acu`),
  UNIQUE KEY `corr_acu_13` (`corr_acu`),
  UNIQUE KEY `corr_acu_14` (`corr_acu`),
  UNIQUE KEY `corr_acu_15` (`corr_acu`),
  UNIQUE KEY `corr_acu_16` (`corr_acu`),
  UNIQUE KEY `corr_acu_17` (`corr_acu`),
  UNIQUE KEY `corr_acu_18` (`corr_acu`),
  UNIQUE KEY `corr_acu_19` (`corr_acu`),
  UNIQUE KEY `corr_acu_20` (`corr_acu`),
  UNIQUE KEY `corr_acu_21` (`corr_acu`),
  UNIQUE KEY `corr_acu_22` (`corr_acu`),
  UNIQUE KEY `corr_acu_23` (`corr_acu`),
  UNIQUE KEY `corr_acu_24` (`corr_acu`),
  UNIQUE KEY `corr_acu_25` (`corr_acu`),
  UNIQUE KEY `corr_acu_26` (`corr_acu`),
  UNIQUE KEY `corr_acu_27` (`corr_acu`),
  UNIQUE KEY `corr_acu_28` (`corr_acu`),
  UNIQUE KEY `corr_acu_29` (`corr_acu`),
  UNIQUE KEY `corr_acu_30` (`corr_acu`),
  UNIQUE KEY `corr_acu_31` (`corr_acu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `acudientes` */

insert  into `acudientes`(`id_acu`,`nom_acu`,`ape_acu`,`corr_acu`,`tel_acu`,`activo`,`createdAt`,`updatedAt`,`UUId`) values 
(1,'Martha sarate','Boze','correo@example.com',322900908,1,'2024-03-27 00:45:14','2024-06-10 21:42:46','9cfda3de-f852-4529-a8c4-d04cfa23cd0a'),
(1222,'Jhonny alberto','casstillo','email@examples.com',322577236,1,'2024-03-21 02:33:55','2024-03-21 02:51:57',NULL),
(12323,'Jose antonnio','ortega','correoexamples@gmail.com',323456789,1,'2024-04-11 00:18:42','2024-04-11 00:18:42','21bd6955-02f0-4654-abc7-23f2cbe5d7c6'),
(32132,'Miguel lopez','costa','costa@hotmail.com',322323223,1,'2024-04-11 09:15:29','2024-04-11 09:15:40',NULL),
(34545,'Carlos arturo','bacca','carlos@outlook.com',349994933,1,'2024-04-11 09:15:32','2024-04-11 09:15:42',NULL),
(321343,'Yoiner david','ternoa','andresds@gmail.com',320200393,1,'2024-04-11 09:15:34','2024-04-11 09:15:44',NULL),
(4234234,'Jefrey david','seballos','jefrey@outlook.com',322267277,1,'2024-04-11 09:15:36','2024-04-11 09:15:46',NULL),
(4343553,'Danitza paola','castro','danitza@gmail.com',328828889,1,'2024-04-11 09:15:38','2024-04-11 09:15:48',NULL);

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
(14025,'Ciencias humanas  y Sociales',1,'2024-06-11','2024-06-11'),
(14991,'Lenguas',1,'2024-06-11','2024-06-11'),
(20739,'Sociales',1,'2024-06-11','2024-06-11'),
(27848,'Historia',1,'2024-06-11','2024-06-11'),
(41892,'Matematicas',1,'2024-06-11','2024-06-11'),
(61298,'Geopolitica',1,'2024-06-11','2024-06-11'),
(69103,'geografia',1,'2024-06-11','2024-06-11');

/*Table structure for table `asignaturadocentes` */

DROP TABLE IF EXISTS `asignaturadocentes`;

CREATE TABLE `asignaturadocentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `asignaturaAsigcod` int(11) NOT NULL,
  `funcionarioFuncid` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `grupoFK` int(11) NOT NULL,
  `tematicasFk` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`asignaturaAsigcod`,`funcionarioFuncid`),
  KEY `funcionarioFuncid` (`funcionarioFuncid`),
  KEY `grupo` (`grupoFK`),
  KEY `asignaturaDocentes_funcionarioFuncid_asignaturaAsigcod_unique` (`asignaturaAsigcod`,`funcionarioFuncid`) USING BTREE,
  KEY `tematicasFk` (`tematicasFk`),
  CONSTRAINT `asignaturadocentes_ibfk_2` FOREIGN KEY (`funcionarioFuncid`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `asignaturadocentes_ibfk_3` FOREIGN KEY (`grupoFK`) REFERENCES `grupos` (`grupcod`),
  CONSTRAINT `asignaturadocentes_ibfk_4` FOREIGN KEY (`tematicasFk`) REFERENCES `tematicas` (`id`),
  CONSTRAINT `asignaturadocentes_ibfk_5` FOREIGN KEY (`asignaturaAsigcod`) REFERENCES `asignaturas` (`asigcod`)
) ENGINE=InnoDB AUTO_INCREMENT=2323237 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asignaturadocentes` */

insert  into `asignaturadocentes`(`id`,`asignaturaAsigcod`,`funcionarioFuncid`,`activo`,`createdAt`,`updatedAt`,`grupoFK`,`tematicasFk`) values 
(2323236,17367,11295345,1,'0000-00-00 00:00:00','0000-00-00 00:00:00',76868,72803);

/*Table structure for table `asignaturaestudiante` */

DROP TABLE IF EXISTS `asignaturaestudiante`;

CREATE TABLE `asignaturaestudiante` (
  `estudianteId` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `asignaturaId` int(11) NOT NULL,
  PRIMARY KEY (`estudianteId`,`asignaturaId`),
  KEY `asignaturaId` (`asignaturaId`),
  CONSTRAINT `asignaturaestudiante_ibfk_1` FOREIGN KEY (`estudianteId`) REFERENCES `estudiantes` (`estudid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `asignaturaestudiante_ibfk_2` FOREIGN KEY (`asignaturaId`) REFERENCES `asignaturas` (`asigcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asignaturaestudiante` */

insert  into `asignaturaestudiante`(`estudianteId`,`activo`,`createdAt`,`updatedAt`,`asignaturaId`) values 
(123123214,1,'0000-00-00 00:00:00','0000-00-00 00:00:00',17367);

/*Table structure for table `asignaturas` */

DROP TABLE IF EXISTS `asignaturas`;

CREATE TABLE `asignaturas` (
  `asigcod` int(100) NOT NULL AUTO_INCREMENT COMMENT 'Codigo de la asignatura',
  `asignombre` varchar(30) DEFAULT NULL COMMENT 'Nombre de la asignatura',
  `asigdescripcion` varchar(100) DEFAULT NULL COMMENT 'Descripción de la asignatura',
  `activo` tinyint(1) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `areaFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`asigcod`),
  KEY `areaFK` (`areaFK`),
  CONSTRAINT `asignaturas_ibfk_1` FOREIGN KEY (`areaFK`) REFERENCES `areas` (`cod_area`)
) ENGINE=InnoDB AUTO_INCREMENT=2147483648 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asignaturas` */

insert  into `asignaturas`(`asigcod`,`asignombre`,`asigdescripcion`,`activo`,`createdAt`,`updatedAt`,`url`,`areaFK`) values 
(16767,'Economia','Asignatura Tecnica',1,'2024-06-11','2024-06-11','https://res.cloudinary.com/ddjks1j0d/image/upload/v1718070524/imagenes-proyecto/towsryuk06fipfwfpcoz.jpg',20739),
(17367,'Filosofia','Asignatura Lectiva',1,'2024-06-11','2024-06-11','https://res.cloudinary.com/ddjks1j0d/image/upload/v1718070101/imagenes-proyecto/ygvmkq1bniyhaml79tjl.jpg',14025),
(58835,'Ingles','Asignatura Tecnica',1,'2024-06-11','2024-06-11','https://res.cloudinary.com/ddjks1j0d/image/upload/v1716845505/imagenes-proyecto/Xs_GrinVuNFnIEmfGSX6FMJiRRuTS0NFyII2oQvYuUFtJIO1h4miZ0mFY1urJNh0SZZ1_ozmkdt.png',14991),
(78003,'Economia','Asignatura Tecnica',1,'2024-06-11','2024-06-11','https://res.cloudinary.com/ddjks1j0d/image/upload/v1718070533/imagenes-proyecto/wqxllezpfobvnduj3pgl.jpg',20739);

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
  `det_asi` tinyint(100) NOT NULL COMMENT 'detalle asistencia',
  `estudidfk` int(11) DEFAULT NULL,
  `grupoFK` int(11) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `claseFK` int(11) DEFAULT NULL,
  `asigFk` int(11) DEFAULT NULL,
  PRIMARY KEY (`cod_asi`),
  KEY `estudidfk` (`estudidfk`),
  KEY `grupoFK` (`grupoFK`),
  KEY `claseFK` (`claseFK`),
  KEY `asigFk` (`asigFk`),
  CONSTRAINT `asistencias_estudiantes_ibfk_1` FOREIGN KEY (`estudidfk`) REFERENCES `estudiantes` (`estudid`),
  CONSTRAINT `asistencias_estudiantes_ibfk_2` FOREIGN KEY (`grupoFK`) REFERENCES `grupos` (`grupcod`),
  CONSTRAINT `asistencias_estudiantes_ibfk_4` FOREIGN KEY (`claseFK`) REFERENCES `clases` (`claseId`),
  CONSTRAINT `asistencias_estudiantes_ibfk_5` FOREIGN KEY (`asigFk`) REFERENCES `asignaturadocentes` (`asignaturaAsigcod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `asistencias_estudiantes` */

/*Table structure for table `calificaciones` */

DROP TABLE IF EXISTS `calificaciones`;

CREATE TABLE `calificaciones` (
  `uid` varchar(255) NOT NULL DEFAULT uuid(),
  `envio_idFK` varchar(255) NOT NULL,
  `nota` double NOT NULL,
  `comentarios` varchar(255) NOT NULL,
  `fec_cal` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `calificaciones` */

/*Table structure for table `clases` */

DROP TABLE IF EXISTS `clases`;

CREATE TABLE `clases` (
  `claseId` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `grupoId` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `asignaturaDocenteId` int(11) DEFAULT NULL,
  PRIMARY KEY (`claseId`),
  KEY `grupoId` (`grupoId`),
  KEY `asignaturaAsigcod` (`asignaturaDocenteId`),
  CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`grupoId`) REFERENCES `grupos` (`grupcod`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`asignaturaDocenteId`) REFERENCES `asignaturadocentes` (`asignaturaAsigcod`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `clases` */

/*Table structure for table `envio` */

DROP TABLE IF EXISTS `envio`;

CREATE TABLE `envio` (
  `uid` varchar(255) NOT NULL DEFAULT uuid(),
  `id_estudiante` int(11) NOT NULL,
  `id_tarea` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `fec_envio` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_tarea` (`id_tarea`),
  CONSTRAINT `envio_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`estudid`),
  CONSTRAINT `envio_ibfk_2` FOREIGN KEY (`id_tarea`) REFERENCES `evaluaciones` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `envio` */

/*Table structure for table `envios` */

DROP TABLE IF EXISTS `envios`;

CREATE TABLE `envios` (
  `uid` varchar(255) NOT NULL,
  `id_estudiante` int(11) NOT NULL,
  `id_tarea` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `fec_envio` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `nota` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `id_estudiante` (`id_estudiante`),
  KEY `id_tarea` (`id_tarea`),
  CONSTRAINT `envios_ibfk_1` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`estudid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `envios_ibfk_2` FOREIGN KEY (`id_tarea`) REFERENCES `evaluaciones` (`codigo`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `envios` */

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
  `acudienteFK` int(11) DEFAULT NULL,
  PRIMARY KEY (`estudid`),
  KEY `rol` (`rol`),
  KEY `grupoFK` (`grupoFK`),
  KEY `acudienteFK` (`acudienteFK`),
  CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `roles` (`id_rol`),
  CONSTRAINT `estudiantes_ibfk_2` FOREIGN KEY (`grupoFK`) REFERENCES `grupos` (`grupcod`),
  CONSTRAINT `estudiantes_ibfk_3` FOREIGN KEY (`acudienteFK`) REFERENCES `acudientes` (`id_acu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `estudiantes` */

insert  into `estudiantes`(`estudid`,`estudnombre`,`estudapellido`,`estuddireccion`,`estudcorreo`,`estudtelefono`,`rol`,`password`,`tok`,`createdAt`,`updatedAt`,`activo`,`grupoFK`,`acudienteFK`) values 
(133,'joao','cancelo','el country','joa@gmail.com',32323232,3,'$2a$04$tWdvp48ZlXihdgloGL5jdu4FZcWLM9ORXAnlTaGwclEkwC5InsAY6',NULL,'0000-00-00','0000-00-00',1,76868,NULL),
(112312334,'Andres','cavadia','ciudadela','cavadia@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,76868,NULL),
(123123123,'valeria','bohada','valle country','valerai@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL,NULL),
(123123214,'valentina','mestre','valle country','mestre@gmail.com',2147483647,3,'',NULL,'0000-00-00','0000-00-00',1,NULL,NULL),
(214748347,'luz','sena','7 de abril','dina@gmail.com',3244564,3,'$2a$04$hZdjFBtImwLp/lPHhj3viOyr4lSyj5uWaxit8m.LsU7qpuuWUgIh2',NULL,'0000-00-00','0000-00-00',1,76868,NULL);

/*Table structure for table `evaluaciones` */

DROP TABLE IF EXISTS `evaluaciones`;

CREATE TABLE `evaluaciones` (
  `codigo` varchar(36) NOT NULL,
  `nombre_tipo_evaluacion` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fec_entre` datetime NOT NULL,
  `url` varchar(255) NOT NULL,
  `id_grupoFK` int(11) DEFAULT NULL,
  `id_asignatura` int(11) DEFAULT NULL,
  `id_funcionario` int(11) DEFAULT NULL,
  `tipo_eva` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `id_grupoFK` (`id_grupoFK`),
  KEY `id_asignatura` (`id_asignatura`),
  KEY `id_funcionario` (`id_funcionario`),
  KEY `tipo_eva` (`tipo_eva`),
  CONSTRAINT `evaluaciones_ibfk_1` FOREIGN KEY (`id_grupoFK`) REFERENCES `grupos` (`grupcod`),
  CONSTRAINT `evaluaciones_ibfk_3` FOREIGN KEY (`id_asignatura`) REFERENCES `asignaturas` (`asigcod`),
  CONSTRAINT `evaluaciones_ibfk_4` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `evaluaciones_ibfk_5` FOREIGN KEY (`tipo_eva`) REFERENCES `tipo evaluacion` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `evaluaciones` */

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

/*Table structure for table `excusas` */

DROP TABLE IF EXISTS `excusas`;

CREATE TABLE `excusas` (
  `cod_exc` varchar(255) NOT NULL,
  `fec_reg_exc` datetime NOT NULL,
  `mot_reg_exc` varchar(255) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `asistenciaFK` int(11) DEFAULT NULL,
  `url_archivo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_exc`),
  KEY `id_persona` (`id_persona`),
  KEY `asitenciaFK` (`asistenciaFK`),
  CONSTRAINT `excusas_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `estudiantes` (`estudid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `excusas_ibfk_2` FOREIGN KEY (`asistenciaFK`) REFERENCES `asistencias_estudiantes` (`cod_asi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `excusas` */

/*Table structure for table `funcionario` */

DROP TABLE IF EXISTS `funcionario`;

CREATE TABLE `funcionario` (
  `funcid` int(11) NOT NULL COMMENT 'Identificación del funcionario',
  `funcnombre` varchar(255) NOT NULL,
  `funcapellido` varchar(255) NOT NULL,
  `funccorreo` varchar(255) NOT NULL,
  `funcrol` enum('docente','Coordinador') NOT NULL,
  `passwordFuncionario` varchar(255) NOT NULL,
  `jefe_areaFK` int(11) DEFAULT NULL COMMENT 'jefe de area',
  `telefono` int(11) DEFAULT NULL COMMENT 'telefono funcionario',
  `rolFK` int(11) DEFAULT NULL COMMENT 'rol',
  `activo` tinyint(1) DEFAULT NULL COMMENT 'Estado de la tabla para aliminado logico',
  `createdAt` date DEFAULT NULL COMMENT 'fecha de creacion',
  `updatedAt` date DEFAULT NULL COMMENT 'fecha de actualizacion',
  PRIMARY KEY (`funcid`),
  UNIQUE KEY `funccorreo` (`funccorreo`),
  KEY `jefe_areaFK` (`jefe_areaFK`),
  KEY `rolFK` (`rolFK`),
  CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`jefe_areaFK`) REFERENCES `funcionario` (`funcid`),
  CONSTRAINT `funcionario_ibfk_2` FOREIGN KEY (`rolFK`) REFERENCES `roles` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `funcionario` */

insert  into `funcionario`(`funcid`,`funcnombre`,`funcapellido`,`funccorreo`,`funcrol`,`passwordFuncionario`,`jefe_areaFK`,`telefono`,`rolFK`,`activo`,`createdAt`,`updatedAt`) values 
(4443,'maria','paternina','pa@gmail.com','Coordinador','$2a$04$ioBcqYcOGh6s8ws0iHaLqOzoMZYQ2U9HFurM9W.PgEwVDCUc.EhNy',33424,2147483647,1,0,'2024-04-11','2024-04-11'),
(23213,'camila','martinez','camila@gmail.com','Coordinador','$2a$04$FNmw5jr64xRzCc5Dr8E/6efUi2ixyLh/9C50cudWYVXf/uqFyDIZS',33424,2147483647,1,1,'2024-03-23','2024-06-07'),
(32434,'marco','lopez','lopez@gmail.com','docente','sdffdsf',33424,320239230,2,1,NULL,NULL),
(33424,'luis','contreras','contreras@gmail.com','Coordinador','fsdfsd',NULL,324233333,1,1,'2024-04-11','2024-04-11'),
(43243,'estafanny','regino','regino@gmail.com','docente','fsdfds',33424,320684011,2,1,'2024-04-11','2024-04-11'),
(123123,'jose','castro','castro@gmail.com','docente','fsdffds',33424,323432324,2,1,'2024-04-11','2024-04-11'),
(432432,'pablo','martinez','martinez@gmail.com','docente','fsdfsdf',33424,334325325,2,1,'2024-04-11','2024-04-11'),
(11295345,'marco','ortiz','marco@gmail.com','docente','$2a$04$JBCYcWRyh381HcfRvutsk.6GLm2T4xnR.7jzkETzXmbC5pgCy88p6',33424,2147483647,2,1,'2024-04-11','2024-04-11'),
(72041132,'Andrea','cavadia','andrea@gmail.com','Coordinador','$2a$04$P7UtGtll3wCikXQrxtkzIuz7MCBVrd2o.6iHbMsVsDJKB6fP6N3DC',33424,2147483647,1,1,'2024-04-28','2024-04-28'),
(123123213,'cecilia','nuñez','cecilianuñez@gmail.com','docente','hhhhhfgh',33424,322577235,1,1,'2024-04-11','2024-04-11'),
(123456789,'Daniela','castilla','daniela@gmail.com','docente','$2a$04$V/0yg6YCDfC1xNgHz3J4nuzXxldv9LusPo1FLJHfNBXA8odvjZ2vm',33424,2147483647,2,1,'2024-05-25','2024-05-25'),
(2147483647,'Andres','cavadia','contrerass@gmail.com','Coordinador','$2a$04$/uM6lEQqeXcx7XDg2lI5s.DPv2rIT0Mcs8YCQsCDiqInuqmVUNAtG',33424,2147483647,1,1,NULL,NULL);

/*Table structure for table `grado` */

DROP TABLE IF EXISTS `grado`;

CREATE TABLE `grado` (
  `grado_id` varchar(11) NOT NULL,
  `nombre_grado` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `año_escolar` datetime DEFAULT NULL,
  `periodo_FK` varchar(100) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL,
  `createdAT` datetime DEFAULT NULL,
  `updatedAT` datetime DEFAULT NULL,
  PRIMARY KEY (`grado_id`),
  KEY `periodo_PK` (`periodo_FK`),
  CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`periodo_FK`) REFERENCES `periodos` (`periodo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `grado` */

insert  into `grado`(`grado_id`,`nombre_grado`,`descripcion`,`año_escolar`,`periodo_FK`,`activo`,`createdAT`,`updatedAT`) values 
('',NULL,NULL,NULL,NULL,NULL,NULL,NULL),
('2121','OCTAVO','NADA','2024-06-08 18:54:28','9a322587-6370-4daf-9a89-b8c4a3550a71',1,NULL,NULL),
('21321','DECIMO','tecnicos','2024-04-29 08:54:32','9a322587-6370-4daf-9a89-b8c4a3550a71',1,'2024-04-29 08:54:42','2024-06-10 22:12:51'),
('3233','NOVENO','NADA','2024-06-08 18:53:57','9a322587-6370-4daf-9a89-b8c4a3550a71',1,NULL,NULL);

/*Table structure for table `grupo_estudiante` */

DROP TABLE IF EXISTS `grupo_estudiante`;

CREATE TABLE `grupo_estudiante` (
  `grupcod` int(11) NOT NULL,
  `estudid` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`grupcod`,`estudid`)
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
(34342,'9A',11295345,1,'2024-06-08 18:49:07',NULL,'3233'),
(76868,'10A',11295345,1,'2024-06-08 18:49:09',NULL,'21321');

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
  `nombre` varchar(255) NOT NULL,
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

/*Table structure for table `tematicagrupos` */

DROP TABLE IF EXISTS `tematicagrupos`;

CREATE TABLE `tematicagrupos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tematicaId` int(11) NOT NULL,
  `grupoId` int(11) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tematicaId` (`tematicaId`),
  KEY `grupoId` (`grupoId`),
  CONSTRAINT `tematicagrupos_ibfk_1` FOREIGN KEY (`tematicaId`) REFERENCES `tematicas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tematicagrupos_ibfk_2` FOREIGN KEY (`grupoId`) REFERENCES `grupos` (`grupcod`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tematicagrupos` */

/*Table structure for table `tematicas` */

DROP TABLE IF EXISTS `tematicas`;

CREATE TABLE `tematicas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `tematicas` */

insert  into `tematicas`(`id`,`titulo`,`descripcion`,`activo`,`createdAt`,`updatedAt`) values 
(3232,'ingles','desarrolar actividades de plaforma anterirormente daddas',1,'2024-06-09 22:52:59','0000-00-00 00:00:00'),
(72803,'Filosofia humana','desarrollo logico en el hombre',1,'2024-06-07 22:55:55','2024-06-07 22:55:55');

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

/* Trigger structure for table `funcionario` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `AsignarGerenteCoordinador` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `AsignarGerenteCoordinador` BEFORE INSERT ON `funcionario` FOR EACH ROW 
BEGIN
    DECLARE max_rol INT;
    SET max_rol = (SELECT MAX(funcid) FROM funcionario WHERE funcrol = 'Coordinador');

    IF NEW.funcrol = 'Coordinador' THEN
        IF max_rol IS NULL THEN
            SET NEW.jefe_areaFK = NULL;
        END IF;
    END IF;
END */$$


DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
