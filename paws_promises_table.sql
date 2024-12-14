-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2024 at 06:51 AM
-- Server version: 11.5.2-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paws_promises_table`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_image`
--

CREATE TABLE `app_image` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `pet_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_image`
--

INSERT INTO `app_image` (`id`, `image`, `pet_id`) VALUES
(8, 'pet_images/Buddy_1.png', 7),
(9, 'pet_images/Buddy_2.png', 7),
(10, 'pet_images/Bella_1.png', 21),
(11, 'pet_images/Bella_2.png', 21),
(12, 'pet_images/Chloe_1.png', 22),
(13, 'pet_images/Chloe_2.png', 22),
(14, 'pet_images/Leo_1.png', 25),
(15, 'pet_images/Leo_2.png', 25),
(16, 'pet_images/Max_1.png', 9),
(17, 'pet_images/Max_2.png', 9),
(18, 'pet_images/Bailey_1.png', 16),
(19, 'pet_images/Bailey_2.png', 16),
(20, 'pet_images/Charlie_1.png', 12),
(21, 'pet_images/Charlie_2.png', 12),
(22, 'pet_images/CICI_1.png', 13),
(23, 'pet_images/CICI_2.png', 13),
(24, 'pet_images/COCO_1.png', 15),
(25, 'pet_images/COCO_2.png', 15),
(26, 'pet_images/Daisy_1.png', 10),
(27, 'pet_images/Daisy_2.png', 10),
(28, 'pet_images/Lily_1.png', 19),
(29, 'pet_images/Lily_2.png', 19),
(30, 'pet_images/Luna_1.png', 8),
(31, 'pet_images/Luna_2.png', 8),
(32, 'pet_images/Mittens_1.png', 17),
(33, 'pet_images/Mittens_2.png', 17),
(34, 'pet_images/Oliver_1.png', 23),
(35, 'pet_images/Oliver_2.png', 23),
(36, 'pet_images/Rex_1.png', 14),
(37, 'pet_images/Rex_2.png', 14),
(38, 'pet_images/Rocky_1.png', 11),
(39, 'pet_images/Rocky_2.png', 11),
(40, 'pet_images/Shadow_1.png', 20),
(41, 'pet_images/Shadow_2.png', 20),
(42, 'pet_images/Simba_1.png', 18),
(43, 'pet_images/Simba_2.png', 18),
(44, 'pet_images/Skyler_1.png', 24),
(45, 'pet_images/Skyler_2.png', 24),
(46, 'pet_images/Tiger_1.jpg', 26),
(47, 'pet_images/Tiger_2.jpg', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_image`
--
ALTER TABLE `app_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_image_pet_id_7f397d5c_fk_app_pet_id` (`pet_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_image`
--
ALTER TABLE `app_image`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_image`
--
ALTER TABLE `app_image`
  ADD CONSTRAINT `app_image_pet_id_7f397d5c_fk_app_pet_id` FOREIGN KEY (`pet_id`) REFERENCES `app_pet` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
