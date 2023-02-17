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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CaloriesOverall`
--

LOCK TABLES `CaloriesOverall` WRITE;
/*!40000 ALTER TABLE `CaloriesOverall` DISABLE KEYS */;
INSERT INTO `CaloriesOverall` VALUES (5,12,0,0,0,'2023-02-17 21:59:58');
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
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb3;
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
-- Table structure for table `TrainingOverall`
--

DROP TABLE IF EXISTS `TrainingOverall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TrainingOverall` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `Distance` float NOT NULL,
  `Speed` float NOT NULL,
  `Calories` int NOT NULL,
  `Duration` int NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TrainingOverall`
--

LOCK TABLES `TrainingOverall` WRITE;
/*!40000 ALTER TABLE `TrainingOverall` DISABLE KEYS */;
INSERT INTO `TrainingOverall` VALUES (5,12,0,0,0,0,'2023-02-17 21:59:54'),(6,14,0,0,0,0,'2023-02-17 21:20:52');
/*!40000 ALTER TABLE `TrainingOverall` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Trainings`
--

LOCK TABLES `Trainings` WRITE;
/*!40000 ALTER TABLE `Trainings` DISABLE KEYS */;
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
  `idUser` int NOT NULL,
  `Steps` int NOT NULL,
  `Time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=327 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WalkSteps`
--

LOCK TABLES `WalkSteps` WRITE;
/*!40000 ALTER TABLE `WalkSteps` DISABLE KEYS */;
INSERT INTO `WalkSteps` VALUES (279,12,2246,'2023-02-17 08:01:00'),(280,12,4562,'2023-02-17 08:02:00'),(281,12,245,'2023-02-17 08:03:00'),(282,12,0,'2023-02-17 21:52:25'),(283,12,0,'2023-02-17 21:52:43'),(284,12,0,'2023-02-17 21:52:55'),(285,12,0,'2023-02-17 21:53:13'),(286,12,0,'2023-02-17 21:53:25'),(287,12,0,'2023-02-17 21:53:43'),(288,12,0,'2023-02-17 21:53:55'),(289,12,0,'2023-02-17 21:54:13'),(290,12,0,'2023-02-17 21:54:25'),(291,12,0,'2023-02-17 21:54:43'),(292,12,0,'2023-02-17 21:54:55'),(293,12,0,'2023-02-17 21:54:58'),(294,12,0,'2023-02-17 21:55:13'),(295,12,0,'2023-02-17 21:55:28'),(296,12,0,'2023-02-17 21:55:43'),(297,12,0,'2023-02-17 21:56:13'),(298,12,0,'2023-02-17 21:56:43'),(299,12,0,'2023-02-17 21:57:13'),(300,12,0,'2023-02-17 21:57:43'),(301,12,0,'2023-02-17 21:58:13'),(302,12,0,'2023-02-17 21:58:43'),(303,12,0,'2023-02-17 21:59:13'),(304,12,0,'2023-02-17 21:59:51'),(305,12,0,'2023-02-17 22:00:13'),(306,12,0,'2023-02-17 22:00:21'),(307,12,0,'2023-02-17 22:00:43'),(308,12,0,'2023-02-17 22:00:51'),(309,12,0,'2023-02-17 22:01:13'),(310,12,0,'2023-02-17 22:01:21'),(311,12,0,'2023-02-17 22:01:21'),(312,12,0,'2023-02-17 22:01:43'),(313,12,49,'2023-02-17 22:01:51'),(314,12,0,'2023-02-17 22:01:51'),(315,12,0,'2023-02-17 22:02:13'),(316,12,15,'2023-02-17 22:02:21'),(317,12,0,'2023-02-17 22:02:21'),(318,12,0,'2023-02-17 22:02:43'),(319,12,15,'2023-02-17 22:02:51'),(320,12,0,'2023-02-17 22:02:51'),(321,12,0,'2023-02-17 22:03:13'),(322,12,15,'2023-02-17 22:03:21'),(323,12,0,'2023-02-17 22:03:21'),(324,12,0,'2023-02-17 22:03:43'),(325,12,0,'2023-02-17 22:03:51'),(326,12,0,'2023-02-17 22:04:13');
/*!40000 ALTER TABLE `WalkSteps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `WalksOverall`
--

DROP TABLE IF EXISTS `WalksOverall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `WalksOverall` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `TotalSteps` int DEFAULT NULL,
  `Calories` int DEFAULT NULL,
  `Distance` float DEFAULT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WalksOverall`
--

LOCK TABLES `WalksOverall` WRITE;
/*!40000 ALTER TABLE `WalksOverall` DISABLE KEYS */;
INSERT INTO `WalksOverall` VALUES (24,12,7147,12810,160.122,'2023-02-17 22:03:51');
/*!40000 ALTER TABLE `WalksOverall` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WaterOverall`
--

LOCK TABLES `WaterOverall` WRITE;
/*!40000 ALTER TABLE `WaterOverall` DISABLE KEYS */;
INSERT INTO `WaterOverall` VALUES (2,'12',200,'2023-02-17 22:02:45');
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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Waters`
--

LOCK TABLES `Waters` WRITE;
/*!40000 ALTER TABLE `Waters` DISABLE KEYS */;
INSERT INTO `Waters` VALUES (70,12,'Coffee','Coffee','Coffee',200,'2023-02-17 22:00:05');
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

-- Dump completed on 2023-02-17 22:07:42
