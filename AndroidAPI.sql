-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: AndroidAPI
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Calories`
--

DROP TABLE IF EXISTS `Calories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Calories` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `Type` varchar(45) NOT NULL,
  `Title` varchar(224) NOT NULL,
  `Content` varchar(224) NOT NULL,
  `Calories` int NOT NULL,
  `Time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Calories`
--

LOCK TABLES `Calories` WRITE;
/*!40000 ALTER TABLE `Calories` DISABLE KEYS */;
INSERT INTO `Calories` VALUES (40,12,'Intake','s','1',123,'2023-02-17 08:00:00'),(41,12,'Burn','23','23',33,'2023-02-17 08:00:00'),(42,12,'Burn','2','2',200,'2023-02-17 08:00:00');
/*!40000 ALTER TABLE `Calories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CaloriesOverall`
--

DROP TABLE IF EXISTS `CaloriesOverall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CaloriesOverall` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `Intake` int NOT NULL,
  `Burn` int NOT NULL,
  `Sum` int NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CaloriesOverall`
--

LOCK TABLES `CaloriesOverall` WRITE;
/*!40000 ALTER TABLE `CaloriesOverall` DISABLE KEYS */;
INSERT INTO `CaloriesOverall` VALUES (3,12,123,233,-110,'2023-02-17 19:22:31');
/*!40000 ALTER TABLE `CaloriesOverall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `News` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(225) NOT NULL,
  `Content` text NOT NULL,
  `Date` date NOT NULL,
  `Author` varchar(45) NOT NULL,
  `Image` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
INSERT INTO `News` VALUES (4,'Drink Less','Cutting back on the booze can be a really effective way to improve your health, boost your energy, lose weight and save money.\n\nAny reduction in the amount you drink every week will be beneficial – and with the right help, it\'s easier than you think.\n\nWe have some simple tips and tools to help you start cutting down today. Let\'s do this!','2023-02-14','NHS','https://assets.nhs.uk/campaigns-cms-prod/images/card-drink-less-compressed.width-640.jpg'),(5,'Lose Weight','If you\'re overweight, losing weight has many health benefits. Making small, simple changes to what and how much you are eating and drinking can really help you lose the pounds.','2023-02-14','NHS','https://assets.nhs.uk/campaigns-cms-prod/images/card-lose-weight-resize_Ut37P9y.width-640.jpg'),(6,'Get Active','t\'s the perfect time to get active. No matter how much you do, physical activity is good for your body and mind. Adults should aim to be active every day. Some is good – more is better still.\n\nA daily brisk walk can give your body a boost, lift your mood and make everyday activities easier.\n\nTry these tools, tips and special offers to move more every day.','2023-02-14','NHS','https://assets.nhs.uk/campaigns-cms-prod/images/card-get-active-skipping.width-640.jpg'),(7,'Quit smoking','Stopping smoking is one of the best things you will ever do for your health. Quitting is much easier when you get the right support and there are lots of options to choose from.\n\nEven if you’ve tried before, maybe more than once, you can still succeed. What you’ve already learned will help you reach your goal of becoming an ex-smoker.\n\nCheck out our advice, tools and tips. Let’s do this!','2023-02-14','NHS','https://assets.nhs.uk/campaigns-cms-prod/images/header-smoking-lungs-cut-out-whole_HHWHaNx.width-640.png');
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TrainingLocations`
--

DROP TABLE IF EXISTS `TrainingLocations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TrainingLocations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idTraining` int NOT NULL,
  `Latitude` float NOT NULL,
  `Longitude` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TrainingLocations`
--

LOCK TABLES `TrainingLocations` WRITE;
/*!40000 ALTER TABLE `TrainingLocations` DISABLE KEYS */;
INSERT INTO `TrainingLocations` VALUES (66,24,53.3813,-1.47087),(67,24,53.3518,-1.42143),(68,-1,53.3518,-1.42143),(69,-1,53.3554,-1.41104),(70,-1,53.3514,-1.40435),(71,25,53.3514,-1.40435),(72,25,53.345,-1.39551);
/*!40000 ALTER TABLE `TrainingLocations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Trainings`
--

DROP TABLE IF EXISTS `Trainings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Trainings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `Type` varchar(45) NOT NULL,
  `Title` varchar(45) NOT NULL,
  `Distance` float NOT NULL,
  `Speed` float NOT NULL,
  `CaloriesBurn` int NOT NULL,
  `StartTime` datetime NOT NULL,
  `EndTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trainings`
--

LOCK TABLES `Trainings` WRITE;
/*!40000 ALTER TABLE `Trainings` DISABLE KEYS */;
INSERT INTO `Trainings` VALUES (24,12,'Walking','walk',0,0,0,'2023-03-16 15:59:00','2023-03-16 15:59:00'),(25,12,'Walking','1',0,0,0,'2023-02-17 16:04:00','2023-02-17 16:04:00');
/*!40000 ALTER TABLE `Trainings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Name` varchar(45) DEFAULT NULL,
  `Gender` varchar(45) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Height` float DEFAULT NULL,
  `Weight` float DEFAULT NULL,
  `Bmi` float DEFAULT NULL,
  `BodyFatRate` float DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (11,'1@test.com','$2a$10$wEURaf2gwdPJZ3UWblMCaOrxBKaTJdBT.IQJJFl8su76YItAsXrV.','1','Male',NULL,NULL,NULL,NULL,NULL),(12,'2@test.com','$2a$10$pikZmVDlMSzZDCCkw.3NI.hGVWc4NYcg92knGDJU924AVcUUnYvGS','terenz','Male',23,173,55,18.4,11.2),(13,'3@test.com','$2a$10$72PleZAc8sLCfGA99JyBIue2oA9pUXJ.DXQIUHKnHuRy6A1d6MuBW','3','Female',NULL,NULL,NULL,NULL,NULL),(14,'4@test.com','$2a$10$i4nHOOJFwR6gkatYOFV1oetsivkR3OyWu55iDdcpTmKMf6yhQMRnK','Testing','Female',18,176,72,16.1,26.6),(15,'5@test.com','$2a$10$DIQ1sipBqKjw8CNia14/L.RUnaH6ZgoRZGLQYByhS3AeRwDDC/2Z2','5',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WalkSteps`
--

DROP TABLE IF EXISTS `WalkSteps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `WalkSteps` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Steps` int NOT NULL,
  `Time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=244 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WalkSteps`
--

LOCK TABLES `WalkSteps` WRITE;
/*!40000 ALTER TABLE `WalkSteps` DISABLE KEYS */;
INSERT INTO `WalkSteps` VALUES (85,0,'2023-02-17 14:51:17'),(86,36,'2023-02-17 14:51:50'),(87,98,'2023-02-17 14:53:02'),(88,98,'2023-02-17 14:53:32'),(89,98,'2023-02-17 14:55:52'),(90,98,'2023-02-17 14:56:22'),(91,98,'2023-02-17 14:56:52'),(92,0,'2023-02-17 14:57:11'),(93,0,'2023-02-17 14:57:41'),(94,0,'2023-02-17 14:58:04'),(95,0,'2023-02-17 14:58:34'),(96,59,'2023-02-17 14:59:04'),(97,59,'2023-02-17 14:59:34'),(98,0,'2023-02-17 15:04:40'),(99,20,'2023-02-17 15:05:10'),(100,26,'2023-02-17 15:05:40'),(101,21,'2023-02-17 15:06:10'),(102,0,'2023-02-17 15:06:42'),(103,0,'2023-02-17 15:07:12'),(104,0,'2023-02-17 15:45:39'),(105,0,'2023-02-17 15:46:09'),(106,0,'2023-02-17 15:46:39'),(107,0,'2023-02-17 15:47:09'),(108,0,'2023-02-17 15:51:39'),(109,0,'2023-02-17 15:52:09'),(110,0,'2023-02-17 15:52:39'),(111,0,'2023-02-17 15:53:09'),(112,0,'2023-02-17 15:53:39'),(113,0,'2023-02-17 15:54:09'),(114,0,'2023-02-17 15:54:39'),(115,0,'2023-02-17 15:55:09'),(116,0,'2023-02-17 15:55:39'),(117,0,'2023-02-17 15:56:09'),(118,0,'2023-02-17 15:56:39'),(119,0,'2023-02-17 15:57:09'),(120,0,'2023-02-17 15:57:39'),(121,0,'2023-02-17 15:58:09'),(122,0,'2023-02-17 15:58:39'),(123,0,'2023-02-17 15:59:09'),(124,0,'2023-02-17 15:59:17'),(125,0,'2023-02-17 15:59:39'),(126,0,'2023-02-17 15:59:47'),(127,0,'2023-02-17 16:00:09'),(128,0,'2023-02-17 16:00:17'),(129,0,'2023-02-17 16:00:39'),(130,0,'2023-02-17 16:00:47'),(131,0,'2023-02-17 16:01:09'),(132,0,'2023-02-17 16:01:17'),(133,0,'2023-02-17 16:01:39'),(134,0,'2023-02-17 16:01:49'),(135,0,'2023-02-17 16:02:09'),(136,0,'2023-02-17 16:02:19'),(137,0,'2023-02-17 16:02:39'),(138,0,'2023-02-17 16:02:49'),(139,0,'2023-02-17 16:03:09'),(140,0,'2023-02-17 16:03:19'),(141,0,'2023-02-17 16:03:39'),(142,0,'2023-02-17 16:03:49'),(143,0,'2023-02-17 16:04:09'),(144,0,'2023-02-17 16:04:39'),(145,0,'2023-02-17 16:04:49'),(146,0,'2023-02-17 16:05:19'),(147,0,'2023-02-17 16:05:49'),(148,0,'2023-02-17 16:06:19'),(149,0,'2023-02-17 16:55:24'),(150,0,'2023-02-17 16:55:45'),(151,0,'2023-02-17 16:56:15'),(152,0,'2023-02-17 16:56:45'),(153,0,'2023-02-17 16:57:08'),(154,0,'2023-02-17 16:57:38'),(155,0,'2023-02-17 16:58:08'),(156,0,'2023-02-17 16:58:38'),(157,0,'2023-02-17 16:59:08'),(158,0,'2023-02-17 16:59:38'),(159,0,'2023-02-17 17:00:08'),(160,0,'2023-02-17 17:00:38'),(161,0,'2023-02-17 17:01:08'),(162,0,'2023-02-17 17:16:53'),(163,0,'2023-02-17 17:16:56'),(164,0,'2023-02-17 17:17:26'),(165,0,'2023-02-17 17:17:56'),(166,0,'2023-02-17 17:18:26'),(167,0,'2023-02-17 17:18:56'),(168,0,'2023-02-17 17:19:26'),(169,0,'2023-02-17 17:19:56'),(170,0,'2023-02-17 17:20:02'),(171,0,'2023-02-17 17:20:32'),(172,0,'2023-02-17 17:21:02'),(173,0,'2023-02-17 17:21:25'),(174,0,'2023-02-17 17:21:55'),(175,0,'2023-02-17 17:22:25'),(176,0,'2023-02-17 17:22:46'),(177,0,'2023-02-17 17:23:15'),(178,0,'2023-02-17 17:23:45'),(179,0,'2023-02-17 17:30:30'),(180,0,'2023-02-17 17:31:00'),(181,0,'2023-02-17 17:31:09'),(182,0,'2023-02-17 17:31:39'),(183,0,'2023-02-17 17:32:09'),(184,0,'2023-02-17 17:32:39'),(185,0,'2023-02-17 17:33:09'),(186,0,'2023-02-17 17:33:39'),(187,0,'2023-02-17 17:34:09'),(188,0,'2023-02-17 17:34:39'),(189,0,'2023-02-17 17:35:09'),(190,0,'2023-02-17 17:35:39'),(191,0,'2023-02-17 17:36:09'),(192,0,'2023-02-17 17:36:39'),(193,0,'2023-02-17 17:37:09'),(194,0,'2023-02-17 17:37:39'),(195,0,'2023-02-17 17:38:09'),(196,0,'2023-02-17 17:38:39'),(197,0,'2023-02-17 17:39:09'),(198,0,'2023-02-17 17:39:39'),(199,0,'2023-02-17 17:39:57'),(200,0,'2023-02-17 17:40:27'),(201,0,'2023-02-17 17:40:57'),(202,0,'2023-02-17 17:41:28'),(203,0,'2023-02-17 17:41:57'),(204,0,'2023-02-17 17:42:27'),(205,0,'2023-02-17 17:42:57'),(206,0,'2023-02-17 17:43:27'),(207,0,'2023-02-17 17:43:57'),(208,0,'2023-02-17 17:44:27'),(209,0,'2023-02-17 18:09:34'),(210,0,'2023-02-17 18:37:31'),(211,0,'2023-02-17 18:38:01'),(212,0,'2023-02-17 18:38:31'),(213,0,'2023-02-17 18:39:01'),(214,0,'2023-02-17 18:39:31'),(215,0,'2023-02-17 18:40:01'),(216,0,'2023-02-17 18:40:31'),(217,0,'2023-02-17 18:41:01'),(218,0,'2023-02-17 18:41:31'),(219,0,'2023-02-17 18:42:01'),(220,0,'2023-02-17 18:42:31'),(221,0,'2023-02-17 19:13:24'),(222,0,'2023-02-17 19:13:54'),(223,0,'2023-02-17 19:14:24'),(224,0,'2023-02-17 19:14:54'),(225,0,'2023-02-17 19:15:24'),(226,0,'2023-02-17 19:15:54'),(227,0,'2023-02-17 19:16:24'),(228,0,'2023-02-17 19:16:54'),(229,0,'2023-02-17 19:17:24'),(230,0,'2023-02-17 19:17:54'),(231,0,'2023-02-17 19:18:24'),(232,0,'2023-02-17 19:18:54'),(233,0,'2023-02-17 19:19:24'),(234,0,'2023-02-17 19:19:54'),(235,0,'2023-02-17 19:20:24'),(236,0,'2023-02-17 19:20:54'),(237,0,'2023-02-17 19:21:24'),(238,0,'2023-02-17 19:21:54'),(239,0,'2023-02-17 19:22:24'),(240,0,'2023-02-17 19:22:54'),(241,0,'2023-02-17 19:23:24'),(242,0,'2023-02-17 19:23:54'),(243,0,'2023-02-17 19:24:24');
/*!40000 ALTER TABLE `WalkSteps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Walks`
--

DROP TABLE IF EXISTS `Walks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Walks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `TotalSteps` int DEFAULT NULL,
  `Calories` int DEFAULT NULL,
  `Distance` float DEFAULT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Walks`
--

LOCK TABLES `Walks` WRITE;
/*!40000 ALTER TABLE `Walks` DISABLE KEYS */;
INSERT INTO `Walks` VALUES (22,12,0,0,0,'2023-02-17 14:51:17');
/*!40000 ALTER TABLE `Walks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WaterOverall`
--

DROP TABLE IF EXISTS `WaterOverall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `WaterOverall` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` varchar(45) NOT NULL,
  `Total` int NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WaterOverall`
--

LOCK TABLES `WaterOverall` WRITE;
/*!40000 ALTER TABLE `WaterOverall` DISABLE KEYS */;
INSERT INTO `WaterOverall` VALUES (1,'12',522,'2023-02-17 19:24:15');
/*!40000 ALTER TABLE `WaterOverall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Waters`
--

DROP TABLE IF EXISTS `Waters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Waters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `Type` varchar(45) NOT NULL,
  `Title` varchar(45) NOT NULL,
  `Content` varchar(45) NOT NULL,
  `Value` int NOT NULL,
  `Time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Waters`
--

LOCK TABLES `Waters` WRITE;
/*!40000 ALTER TABLE `Waters` DISABLE KEYS */;
INSERT INTO `Waters` VALUES (65,12,'ColdDrink','1','1',322,'2023-02-17 19:24:09'),(66,12,'Coffee','Coffee','Coffee',200,'2023-02-17 19:24:12');
/*!40000 ALTER TABLE `Waters` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 19:25:14
