-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 03:20 AM
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
-- Table structure for table `app_age`
--

CREATE TABLE `app_age` (
  `id` bigint(20) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_age`
--

INSERT INTO `app_age` (`id`, `name`) VALUES
(1, 'Puppy | Kitten (0 - 1 Year)'),
(2, 'Young (1 - 3 Years)'),
(3, 'Adult (3 - 7 Years)'),
(4, 'Senior (7+ Years)');

-- --------------------------------------------------------

--
-- Table structure for table `app_animal`
--

CREATE TABLE `app_animal` (
  `id` bigint(20) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_animal`
--

INSERT INTO `app_animal` (`id`, `name`) VALUES
(1, 'Dog'),
(2, 'Cat');

-- --------------------------------------------------------

--
-- Table structure for table `app_breed`
--

CREATE TABLE `app_breed` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `animal_type_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_breed`
--

INSERT INTO `app_breed` (`id`, `name`, `animal_type_id`) VALUES
(12, 'Domestic Shorthair', 2),
(13, 'Persian', 2),
(14, 'Siamese', 2),
(15, 'Maine Coon', 2),
(16, 'Bengal', 2),
(17, 'Abyssinian', 2),
(18, 'Ragdoll', 2),
(19, 'British Shorthair', 2),
(20, 'Sphynx', 2),
(21, 'Scottish Fold', 2),
(23, 'Russian Blue', 2),
(24, 'Birman', 2),
(25, 'Oriental Shorthair', 2),
(26, 'Exotic Shorthair', 2),
(27, 'Turkish Angora', 2),
(28, 'Aspin', 1),
(29, 'Shih Tzu', 1),
(30, 'Poodle', 1),
(31, 'Chihuahua', 1),
(32, 'Maltese', 1),
(33, 'Dachshund', 1),
(34, 'Pomeranian', 1),
(36, 'Beagle', 1),
(38, 'Labrador Retriever', 1),
(39, 'Pit Bull Terrier', 1),
(40, 'Doberman Pinscher', 1),
(41, 'Boxer', 1),
(42, 'German Shepherd', 1),
(44, 'Bulldog', 1),
(45, 'Rottweiler', 1),
(46, 'Terrier', 1),
(47, 'Jack Russell Terrier', 1),
(48, 'Golden Retriever', 1),
(49, 'Tuxedo', 2),
(50, 'Orange Tabby', 2),
(51, 'Calico', 2),
(52, 'Black', 2),
(53, 'Tabby', 2),
(54, 'Tortoise Shell', 2);

-- --------------------------------------------------------

--
-- Table structure for table `app_gender`
--

CREATE TABLE `app_gender` (
  `id` bigint(20) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_gender`
--

INSERT INTO `app_gender` (`id`, `name`) VALUES
(1, 'M'),
(2, 'F');

-- --------------------------------------------------------

--
-- Table structure for table `app_geolocation`
--

CREATE TABLE `app_geolocation` (
  `id` bigint(20) NOT NULL,
  `longitude` decimal(40,25) NOT NULL,
  `latitude` decimal(40,25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_geolocation`
--

INSERT INTO `app_geolocation` (`id`, `longitude`, `latitude`) VALUES
(2, 121.0770369076400900000000000, 14.6348936315937370000000000),
(3, 121.0313749816484000000000000, 14.6079850939009950000000000),
(4, 121.0457766930355900000000000, 14.5804981637118940000000000);

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

-- --------------------------------------------------------

--
-- Table structure for table `app_pet`
--

CREATE TABLE `app_pet` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `medical_description` varchar(1000) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `age_id` bigint(20) DEFAULT NULL,
  `breed_id` bigint(20) DEFAULT NULL,
  `gender_id` bigint(20) DEFAULT NULL,
  `shelter_id` bigint(20) DEFAULT NULL,
  `size_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_pet`
--

INSERT INTO `app_pet` (`id`, `name`, `description`, `medical_description`, `created_at`, `updated_at`, `age_id`, `breed_id`, `gender_id`, `shelter_id`, `size_id`) VALUES
(7, 'Buddy', 'Buddy is a friendly, black-and-brown mixed breed dog, about 2 years old. He’s medium-sized with short fur, a calm temperament, and is highly sociable with other dogs and people.', 'Buddy has mild hip dysplasia but can still lead an active life with regular exercise and a healthy diet.', '2024-12-14 04:17:47.318814', '2024-12-14 04:17:47.318814', 2, 28, 1, 2, 2),
(8, 'Luna', 'Luna is a tiny, energetic aspin mix with tan fur and big ears. She’s playful, enjoys being indoors, and would be ideal for a small space or apartment living.', 'Luna has patellar luxation (knee issues), which may require monitoring but doesn’t affect her playful nature.', '2024-12-14 04:20:28.276688', '2024-12-14 04:20:28.276688', 2, 28, 2, 3, 1),
(9, 'Max', 'Max is a large, black Labrador mix with a strong build and kind eyes. He’s approximately 3 years old, loves the outdoors, and is excellent with families.', 'Max is recovering from heartworm treatment and needs regular check-ups to ensure his heart stays healthy.', '2024-12-14 04:21:05.490018', '2024-12-14 04:21:05.490018', 2, 38, 1, 4, 3),
(10, 'Daisy', 'Daisy is a playful Beagle mix with a smooth tricolor coat. She’s curious, alert, and loves going on walks. She’s about 1.5 years old and very friendly with children.', 'Daisy has mild allergies that can be managed with a special diet and occasional medication.', '2024-12-14 04:21:29.577900', '2024-12-14 04:21:29.577900', 2, 36, 2, 2, 2),
(11, 'Rocky', 'Rocky is a wire-haired Terrier mix with a scruffy look and lots of energy. He’s about 2 years old and loves playing fetch and going for long walks.', 'Rocky has sensitive skin and requires hypoallergenic shampoo and regular grooming to avoid irritation.', '2024-12-14 04:23:11.914779', '2024-12-14 04:23:11.914779', 2, 46, 1, 3, 2),
(12, 'Charlie', 'Charlie is a strong and loyal German Shepherd mix with a black-and-tan coat. He’s about 4 years old and is very protective, making him ideal for a family home or as a guard dog.', 'Charlie has arthritis in his back legs, which requires joint supplements and a low-impact exercise routine.', '2024-12-14 04:24:01.845256', '2024-12-14 04:24:01.845256', 3, 42, 1, 4, 2),
(13, 'Cici', 'Cici is a medium-sized Boxer mix with a brindle coat. She’s highly energetic, loves playing with other dogs, and is perfect for an active family. Coco is 2 years old and enjoys outdoor activities.', 'Cici has a heart murmur, which is currently monitored by a vet but doesn’t limit her high energy levels.', '2024-12-14 04:24:32.462632', '2024-12-14 04:24:32.462632', 2, 41, 2, 2, 2),
(14, 'Rex', 'Rex is a small, energetic Jack Russell Terrier with a white and brown coat. He’s about 3 years old and is known for his playful and adventurous nature.', 'Rex has mild anxiety, especially around loud noises, and benefits from a calm environment or anti-anxiety medication when necessary.', '2024-12-14 04:25:39.839442', '2024-12-14 04:25:39.839442', 2, 47, 1, 3, 1),
(15, 'Coco', 'Coco is a medium-sized Boxer mix with a brindle coat. She’s highly energetic, loves playing with other dogs, and is perfect for an active family. Coco is 2 years old and enjoys outdoor activities.', 'Coco has a heart murmur, which is currently monitored by a vet but doesn’t limit her high energy levels.', '2024-12-14 04:25:59.663411', '2024-12-14 04:25:59.663411', 2, 41, 2, 4, 2),
(16, 'Bailey', 'Bailey is a large, friendly Golden Retriever with a golden coat. She’s about 1 year old and loves being around people, making her a great family pet.', 'Bailey has hip dysplasia and requires daily medication and joint supplements to help with mobility.', '2024-12-14 04:27:00.413894', '2024-12-14 04:27:00.413894', 2, 48, 2, 4, 3),
(17, 'Mittens', 'Mitten is a black-and-white Tuxedo cat with striking white paws. She’s calm and loves lounging in sunspots. Mittens is about 3 years old and enjoys quiet environments.', 'Mitten is asthmatic and occasionally needs inhaler treatments, but otherwise leads a normal life.', '2024-12-14 04:30:05.817244', '2024-12-15 02:19:59.702264', 2, 49, 2, 4, 1),
(18, 'Simba', 'Simba is an orange Tabby cat with bold stripes and a curious personality. He loves exploring new areas and is friendly with other cats. He’s about 2 years old.', 'Simba has a mild case of feline lower urinary tract disease (FLUTD) and needs a specialized diet to maintain urinary health.', '2024-12-14 04:30:25.863347', '2024-12-14 04:30:25.863347', 2, 50, 1, 4, 1),
(19, 'Lily', 'Lily is a beautiful Calico cat with a mix of orange, black, and white patches. She’s affectionate and enjoys being around people, making her a great companion.', 'Lily has a mild eye infection that is being treated with eye drops and is improving steadily.', '2024-12-14 04:32:11.866024', '2024-12-14 04:32:11.866024', 2, 51, 2, 2, 1),
(20, 'Shadow', 'Shadow is a sleek black cat with green eyes, known for being playful yet independent. He’s about 4 years old and loves nighttime play sessions.', 'Shadow has a slight limp from an old injury but it doesn’t affect his mobility or playful nature.', '2024-12-14 04:32:56.130507', '2024-12-15 02:20:10.075929', 3, 52, 1, 3, 1),
(21, 'Bella', 'Bella is a striking Siamese cat with blue eyes and cream-colored fur. She’s vocal, loves attention, and enjoys being the center of attention in her home.', 'Bella has hyperthyroidism and is currently on daily medication to manage her condition.', '2024-12-14 04:33:14.103130', '2024-12-15 02:19:56.134278', 2, 14, 2, 2, 1),
(22, 'Chloe', 'Chloe is a calm and affectionate Ragdoll cat with long, soft fur and striking blue eyes. She’s about 5 years old and is very gentle, making her a great indoor cat.', 'Chloe has mild kidney disease and needs a special diet to support her kidney health.', '2024-12-14 04:33:40.520640', '2024-12-14 04:33:40.520640', 3, 18, 2, 2, 1),
(23, 'Oliver', 'Oliver is a friendly, playful Tabby cat with gray and black stripes. He’s about 4 years old and enjoys being around people and playing with toys.', 'Oliver has mild feline asthma, which occasionally requires an inhaler but doesn’t hinder his playfulness.', '2024-12-14 04:34:18.074135', '2024-12-14 04:34:18.074135', 3, 53, 1, 3, 1),
(24, 'Skyler', 'Skyler is a sleek, white domestic shorthair cat with a calm demeanor. He’s about 6 years old and enjoys lounging in quiet spaces. He’s friendly but prefers a quiet home environment.', 'Skyler is diabetic and requires daily insulin injections to manage his condition.', '2024-12-14 04:34:35.834832', '2024-12-14 04:34:35.834832', 3, 12, 1, 2, 1),
(25, 'Leo', 'Leo is a striking Tortoiseshell cat with a mix of black, and white in her fur. He’s about 2 years old and has a curious and adventurous personality.', 'Leo has recurring ear infections and needs regular ear cleanings and check-ups to keep them under control.', '2024-12-14 04:34:54.433956', '2024-12-14 04:34:54.433956', 2, 54, 1, 3, 1),
(26, 'Tiger', 'Tiger is a stunning Bengal cat with a golden-brown coat and distinctive black rosettes. He’s about 3 years old, highly energetic, and loves climbing and exploring his surroundings.', 'Tiger has a history of digestive issues and requires a sensitive stomach diet to avoid flare-ups.', '2024-12-14 04:35:35.724778', '2024-12-14 04:35:35.724778', 3, 16, 1, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_shelter`
--

CREATE TABLE `app_shelter` (
  `id` bigint(20) NOT NULL,
  `name` varchar(75) NOT NULL,
  `contact_number` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `link` varchar(200) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `location_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_shelter`
--

INSERT INTO `app_shelter` (`id`, `name`, `contact_number`, `email`, `link`, `created_at`, `updated_at`, `location_id`) VALUES
(2, 'PAWS Animal Rehabilitation Center', '09124529125', 'pawsorg@gmail.com', 'https://paws.org.ph/', '2024-12-14 04:04:43.170900', '2024-12-14 04:04:43.170900', 2),
(3, 'Aso, Pusa ATBP. Animal Shelter and Veterinary Services', '0282545580', 'asopusaatbp021@yahoo.com', 'https://www.facebook.com/p/AsoPusa-Atbp-Animal-Shelter-and-Veterinary-Services-My-Family-Pet-Shop-100051611887533/', '2024-12-14 04:07:30.881633', '2024-12-14 04:10:44.149486', 3),
(4, 'Lara\'s Ark', '09064118334', 'larasark.ph@gmail.com', 'https://www.facebook.com/larasark.ph/', '2024-12-14 04:10:34.993052', '2024-12-14 04:10:34.993052', 4);

-- --------------------------------------------------------

--
-- Table structure for table `app_size`
--

CREATE TABLE `app_size` (
  `id` bigint(20) NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_size`
--

INSERT INTO `app_size` (`id`, `name`) VALUES
(1, 'S (0 - 10 kg)'),
(2, 'M (10 - 25 kg)'),
(3, 'L (25 - 40 kg)'),
(4, 'XL (40+ kg)');

-- --------------------------------------------------------

--
-- Table structure for table `app_volunteer`
--

CREATE TABLE `app_volunteer` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `age` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `contact_number` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_volunteer`
--

INSERT INTO `app_volunteer` (`id`, `first_name`, `last_name`, `age`, `email`, `contact_number`, `address`) VALUES
(18, 'Jhack', 'Concha', '21', 'jr.concha99@gmail.com', '09125423145', '1957 Firmeza St. Sampaloc Manila'),
(20, 'Jhack', 'Concha', '19', 'kushiro.runosuke@gmail.com', '09125423145', '1957 Firmeza St. Sampaloc Manila');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add shelters', 7, 'add_shelters'),
(26, 'Can change shelters', 7, 'change_shelters'),
(27, 'Can delete shelters', 7, 'delete_shelters'),
(28, 'Can view shelters', 7, 'view_shelters'),
(29, 'Can add pets', 8, 'add_pets'),
(30, 'Can change pets', 8, 'change_pets'),
(31, 'Can delete pets', 8, 'delete_pets'),
(32, 'Can view pets', 8, 'view_pets'),
(33, 'Can add breeds', 9, 'add_breeds'),
(34, 'Can change breeds', 9, 'change_breeds'),
(35, 'Can delete breeds', 9, 'delete_breeds'),
(36, 'Can view breeds', 9, 'view_breeds'),
(37, 'Can add images', 10, 'add_images'),
(38, 'Can change images', 10, 'change_images'),
(39, 'Can delete images', 10, 'delete_images'),
(40, 'Can view images', 10, 'view_images'),
(41, 'Can add sizes', 11, 'add_sizes'),
(42, 'Can change sizes', 11, 'change_sizes'),
(43, 'Can delete sizes', 11, 'delete_sizes'),
(44, 'Can view sizes', 11, 'view_sizes'),
(45, 'Can add genders', 12, 'add_genders'),
(46, 'Can change genders', 12, 'change_genders'),
(47, 'Can delete genders', 12, 'delete_genders'),
(48, 'Can view genders', 12, 'view_genders'),
(49, 'Can add ages', 13, 'add_ages'),
(50, 'Can change ages', 13, 'change_ages'),
(51, 'Can delete ages', 13, 'delete_ages'),
(52, 'Can view ages', 13, 'view_ages'),
(53, 'Can add geolocation', 14, 'add_geolocation'),
(54, 'Can change geolocation', 14, 'change_geolocation'),
(55, 'Can delete geolocation', 14, 'delete_geolocation'),
(56, 'Can view geolocation', 14, 'view_geolocation'),
(57, 'Can add age', 13, 'add_age'),
(58, 'Can change age', 13, 'change_age'),
(59, 'Can delete age', 13, 'delete_age'),
(60, 'Can view age', 13, 'view_age'),
(61, 'Can add breed', 9, 'add_breed'),
(62, 'Can change breed', 9, 'change_breed'),
(63, 'Can delete breed', 9, 'delete_breed'),
(64, 'Can view breed', 9, 'view_breed'),
(65, 'Can add gender', 12, 'add_gender'),
(66, 'Can change gender', 12, 'change_gender'),
(67, 'Can delete gender', 12, 'delete_gender'),
(68, 'Can view gender', 12, 'view_gender'),
(69, 'Can add image', 10, 'add_image'),
(70, 'Can change image', 10, 'change_image'),
(71, 'Can delete image', 10, 'delete_image'),
(72, 'Can view image', 10, 'view_image'),
(73, 'Can add pet', 8, 'add_pet'),
(74, 'Can change pet', 8, 'change_pet'),
(75, 'Can delete pet', 8, 'delete_pet'),
(76, 'Can view pet', 8, 'view_pet'),
(77, 'Can add shelter', 7, 'add_shelter'),
(78, 'Can change shelter', 7, 'change_shelter'),
(79, 'Can delete shelter', 7, 'delete_shelter'),
(80, 'Can view shelter', 7, 'view_shelter'),
(81, 'Can add size', 11, 'add_size'),
(82, 'Can change size', 11, 'change_size'),
(83, 'Can delete size', 11, 'delete_size'),
(84, 'Can view size', 11, 'view_size'),
(85, 'Can add volunteer', 15, 'add_volunteer'),
(86, 'Can change volunteer', 15, 'change_volunteer'),
(87, 'Can delete volunteer', 15, 'delete_volunteer'),
(88, 'Can view volunteer', 15, 'view_volunteer'),
(89, 'Can add animal', 16, 'add_animal'),
(90, 'Can change animal', 16, 'change_animal'),
(91, 'Can delete animal', 16, 'delete_animal'),
(92, 'Can view animal', 16, 'view_animal');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$870000$gQFYThLp9dhrpsrfhKOkKQ$CWE2F5b6+PdBdclHSvvxQLIGrsN9b+JOjQ2NR0pCU+E=', '2024-12-05 13:55:52.804796', 1, 'root', '', '', '', 1, 1, '2024-12-05 13:54:04.077408');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-12-05 13:58:11.942626', '1', 'Image of Pet 1', 1, '[{\"added\": {}}]', 10, 1),
(2, '2024-12-05 13:58:27.752308', '1', 'Puppy', 1, '[{\"added\": {}}]', 13, 1),
(3, '2024-12-05 13:58:29.709187', '2', 'Young', 1, '[{\"added\": {}}]', 13, 1),
(4, '2024-12-05 13:58:30.993125', '3', 'Adult', 1, '[{\"added\": {}}]', 13, 1),
(5, '2024-12-05 13:58:32.143745', '4', 'Senior', 1, '[{\"added\": {}}]', 13, 1),
(6, '2024-12-05 13:58:36.755893', '1', 'AF', 1, '[{\"added\": {}}]', 9, 1),
(7, '2024-12-05 13:58:38.198559', '2', 'AP', 1, '[{\"added\": {}}]', 9, 1),
(8, '2024-12-05 13:58:39.375008', '3', 'AM', 1, '[{\"added\": {}}]', 9, 1),
(9, '2024-12-05 13:58:41.722539', '4', 'AB', 1, '[{\"added\": {}}]', 9, 1),
(10, '2024-12-05 13:58:42.992050', '5', 'AS', 1, '[{\"added\": {}}]', 9, 1),
(11, '2024-12-05 13:58:44.257984', '6', 'AU', 1, '[{\"added\": {}}]', 9, 1),
(12, '2024-12-05 13:58:46.265039', '7', 'BE', 1, '[{\"added\": {}}]', 9, 1),
(13, '2024-12-05 13:58:50.179205', '8', 'BS', 1, '[{\"added\": {}}]', 9, 1),
(14, '2024-12-05 13:58:52.058779', '9', 'BL', 1, '[{\"added\": {}}]', 9, 1),
(15, '2024-12-05 13:58:54.594054', '10', 'BO', 1, '[{\"added\": {}}]', 9, 1),
(16, '2024-12-05 13:58:56.100109', '11', 'BU', 1, '[{\"added\": {}}]', 9, 1),
(17, '2024-12-05 13:58:57.791128', '12', 'BR', 1, '[{\"added\": {}}]', 9, 1),
(18, '2024-12-05 13:58:59.567280', '13', 'CA', 1, '[{\"added\": {}}]', 9, 1),
(19, '2024-12-05 13:59:01.167551', '14', 'CH', 1, '[{\"added\": {}}]', 9, 1),
(20, '2024-12-05 13:59:02.768478', '15', 'CI', 1, '[{\"added\": {}}]', 9, 1),
(21, '2024-12-05 13:59:04.186174', '16', 'CO', 1, '[{\"added\": {}}]', 9, 1),
(22, '2024-12-05 13:59:05.584266', '17', 'CO', 1, '[{\"added\": {}}]', 9, 1),
(23, '2024-12-05 13:59:13.646223', '18', 'DA', 1, '[{\"added\": {}}]', 9, 1),
(24, '2024-12-05 13:59:16.437558', '19', 'DO', 1, '[{\"added\": {}}]', 9, 1),
(25, '2024-12-05 13:59:19.136069', '20', 'EL', 1, '[{\"added\": {}}]', 9, 1),
(26, '2024-12-05 13:59:32.003058', '1', 'S', 1, '[{\"added\": {}}]', 11, 1),
(27, '2024-12-05 13:59:33.495466', '2', 'M', 1, '[{\"added\": {}}]', 11, 1),
(28, '2024-12-05 13:59:34.580308', '3', 'L', 1, '[{\"added\": {}}]', 11, 1),
(29, '2024-12-05 13:59:35.664225', '4', 'XL', 1, '[{\"added\": {}}]', 11, 1),
(30, '2024-12-05 14:00:24.601209', '1', 'M', 1, '[{\"added\": {}}]', 12, 1),
(31, '2024-12-05 14:00:26.170731', '2', 'F', 1, '[{\"added\": {}}]', 12, 1),
(32, '2024-12-05 14:01:06.107074', '1', 'Longitude: 187, Latitude: 563', 1, '[{\"added\": {}}]', 14, 1),
(33, '2024-12-05 14:01:08.304964', '1', 'Gora', 1, '[{\"added\": {}}]', 7, 1),
(34, '2024-12-05 14:01:26.030773', '1', 'Rexar', 1, '[{\"added\": {}}]', 8, 1),
(35, '2024-12-06 01:41:10.547278', '2', 'Image of Pet 2', 1, '[{\"added\": {}}]', 10, 1),
(36, '2024-12-06 01:41:48.702296', '1', 'Rexar', 2, '[{\"changed\": {\"fields\": [\"Images\"]}}]', 8, 1),
(37, '2024-12-06 02:13:04.599210', '1', 'Puppy', 1, '[{\"added\": {}}]', 13, 1),
(38, '2024-12-06 02:13:06.610494', '2', 'Young', 1, '[{\"added\": {}}]', 13, 1),
(39, '2024-12-06 02:13:07.872446', '3', 'Adult', 1, '[{\"added\": {}}]', 13, 1),
(40, '2024-12-06 02:13:09.270842', '4', 'Senior', 1, '[{\"added\": {}}]', 13, 1),
(41, '2024-12-06 02:13:12.363181', '1', 'AF', 1, '[{\"added\": {}}]', 9, 1),
(42, '2024-12-06 02:13:13.723331', '2', 'AP', 1, '[{\"added\": {}}]', 9, 1),
(43, '2024-12-06 02:13:16.424193', '1', 'M', 1, '[{\"added\": {}}]', 12, 1),
(44, '2024-12-06 02:13:18.016784', '2', 'F', 1, '[{\"added\": {}}]', 12, 1),
(45, '2024-12-06 02:14:22.301180', '1', 'Longitude: 123, Latitude: 123', 1, '[{\"added\": {}}]', 14, 1),
(46, '2024-12-06 02:14:25.096277', '1', 'Gora', 1, '[{\"added\": {}}]', 7, 1),
(47, '2024-12-06 02:14:28.577311', '1', 'S', 1, '[{\"added\": {}}]', 11, 1),
(48, '2024-12-06 02:14:30.010914', '2', 'M', 1, '[{\"added\": {}}]', 11, 1),
(49, '2024-12-06 02:14:31.280520', '3', 'L', 1, '[{\"added\": {}}]', 11, 1),
(50, '2024-12-06 02:14:32.402504', '4', 'XL', 1, '[{\"added\": {}}]', 11, 1),
(51, '2024-12-06 02:14:53.076924', '1', 'Rexar', 1, '[{\"added\": {}}]', 8, 1),
(52, '2024-12-06 02:18:14.256247', '1', 'Image of Pet 1', 1, '[{\"added\": {}}]', 10, 1),
(53, '2024-12-06 02:18:43.170090', '1', 'Image of Pet 1', 2, '[{\"changed\": {\"fields\": [\"Content type\"]}}]', 10, 1),
(54, '2024-12-06 02:24:58.491059', '2', 'Rexar', 1, '[{\"added\": {}}]', 8, 1),
(55, '2024-12-06 02:26:03.265563', '2', 'Image of Rexar', 1, '[{\"added\": {}}]', 10, 1),
(56, '2024-12-06 02:26:19.774633', '3', 'Image of Rexar', 1, '[{\"added\": {}}]', 10, 1),
(57, '2024-12-06 02:44:20.570197', '3', 'AM', 1, '[{\"added\": {}}]', 9, 1),
(58, '2024-12-06 02:44:22.004700', '4', 'AB', 1, '[{\"added\": {}}]', 9, 1),
(59, '2024-12-06 02:44:23.724835', '5', 'AS', 1, '[{\"added\": {}}]', 9, 1),
(60, '2024-12-06 02:44:25.373178', '6', 'AU', 1, '[{\"added\": {}}]', 9, 1),
(61, '2024-12-06 02:44:27.283645', '7', 'BE', 1, '[{\"added\": {}}]', 9, 1),
(62, '2024-12-06 02:44:28.858611', '8', 'BS', 1, '[{\"added\": {}}]', 9, 1),
(63, '2024-12-06 02:44:30.135844', '9', 'BL', 1, '[{\"added\": {}}]', 9, 1),
(64, '2024-12-06 02:44:31.517696', '10', 'BO', 1, '[{\"added\": {}}]', 9, 1),
(65, '2024-12-06 02:44:32.906198', '11', 'BU', 1, '[{\"added\": {}}]', 9, 1),
(66, '2024-12-08 02:37:59.061293', '1', 'Dog', 1, '[{\"added\": {}}]', 16, 1),
(67, '2024-12-08 02:38:00.728960', '2', 'Cat', 1, '[{\"added\": {}}]', 16, 1),
(68, '2024-12-08 02:38:07.679644', '11', 'BU', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(69, '2024-12-08 02:38:10.943775', '10', 'BO', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(70, '2024-12-08 02:38:14.238580', '8', 'BS', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(71, '2024-12-08 02:38:22.601884', '7', 'BE', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(72, '2024-12-08 02:38:26.261832', '6', 'AU', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(73, '2024-12-08 02:38:30.245788', '5', 'AS', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(74, '2024-12-08 02:38:40.859718', '4', 'AB', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(75, '2024-12-08 02:38:47.597045', '3', 'AM', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(76, '2024-12-08 02:38:51.025976', '2', 'AP', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(77, '2024-12-08 02:38:53.709155', '1', 'AF', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(78, '2024-12-08 02:41:54.074623', '11', 'Afghan Hound | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(79, '2024-12-08 02:41:58.450553', '10', 'Airedale Terrier | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(80, '2024-12-08 02:42:01.868926', '9', 'American Bulldog | None', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(81, '2024-12-08 02:42:05.930778', '9', 'American Bulldog | Dog', 2, '[{\"changed\": {\"fields\": [\"Animal type\"]}}]', 9, 1),
(82, '2024-12-08 02:42:08.968701', '8', 'Basset Hound | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(83, '2024-12-08 02:42:11.592596', '7', 'Chihuahua | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(84, '2024-12-08 02:42:14.618921', '6', 'Poodle | Cat', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(85, '2024-12-08 02:42:17.923525', '5', 'Schnauzer | Cat', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(86, '2024-12-08 02:42:21.593487', '4', 'Spanish Water Dog | Cat', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(87, '2024-12-08 02:42:24.843469', '3', 'Terrier | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(88, '2024-12-08 02:42:28.256057', '2', 'West Highland Terrier | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(89, '2024-12-08 02:42:33.231417', '1', 'Pomeranian | Dog', 2, '[{\"changed\": {\"fields\": [\"Breed Name\"]}}]', 9, 1),
(90, '2024-12-12 00:53:40.249355', '3', 'Buddy', 1, '[{\"added\": {}}]', 8, 1),
(91, '2024-12-12 00:54:05.482547', '4', 'Luna', 1, '[{\"added\": {}}]', 8, 1),
(92, '2024-12-12 00:54:28.834317', '5', 'Max', 1, '[{\"added\": {}}]', 8, 1),
(93, '2024-12-12 00:54:44.234184', '6', 'Daisy', 1, '[{\"added\": {}}]', 8, 1),
(94, '2024-12-12 00:54:57.228822', '4', 'Buddy Image DB ID: 4', 1, '[{\"added\": {}}]', 10, 1),
(95, '2024-12-12 00:55:02.514013', '5', 'Luna Image DB ID: 5', 1, '[{\"added\": {}}]', 10, 1),
(96, '2024-12-12 00:55:07.309315', '6', 'Max Image DB ID: 6', 1, '[{\"added\": {}}]', 10, 1),
(97, '2024-12-12 00:55:13.814603', '7', 'Daisy Image DB ID: 7', 1, '[{\"added\": {}}]', 10, 1),
(98, '2024-12-14 02:39:15.821660', '1', 'Gora', 3, '', 7, 1),
(99, '2024-12-14 02:39:33.573038', '11', 'Afghan Hound | Dog', 3, '', 9, 1),
(100, '2024-12-14 02:39:33.573038', '10', 'Airedale Terrier | Dog', 3, '', 9, 1),
(101, '2024-12-14 02:39:33.573038', '9', 'American Bulldog | Dog', 3, '', 9, 1),
(102, '2024-12-14 02:39:33.573038', '8', 'Basset Hound | Dog', 3, '', 9, 1),
(103, '2024-12-14 02:39:33.573038', '7', 'Chihuahua | Dog', 3, '', 9, 1),
(104, '2024-12-14 02:39:33.573038', '6', 'Poodle | Cat', 3, '', 9, 1),
(105, '2024-12-14 02:39:33.573038', '5', 'Schnauzer | Cat', 3, '', 9, 1),
(106, '2024-12-14 02:39:33.573038', '4', 'Spanish Water Dog | Cat', 3, '', 9, 1),
(107, '2024-12-14 02:39:33.573038', '3', 'Terrier | Dog', 3, '', 9, 1),
(108, '2024-12-14 02:39:33.573038', '2', 'West Highland Terrier | Dog', 3, '', 9, 1),
(109, '2024-12-14 02:39:33.573038', '1', 'Pomeranian | Dog', 3, '', 9, 1),
(110, '2024-12-14 02:39:41.568700', '6', 'Daisy', 3, '', 8, 1),
(111, '2024-12-14 02:39:41.568700', '5', 'Max', 3, '', 8, 1),
(112, '2024-12-14 02:39:41.568700', '4', 'Luna', 3, '', 8, 1),
(113, '2024-12-14 02:39:41.568700', '3', 'Buddy', 3, '', 8, 1),
(114, '2024-12-14 02:39:41.568700', '2', 'Rexar', 3, '', 8, 1),
(115, '2024-12-14 02:39:49.720155', '1', 'Longitude: 14.6403745959193190000000000, Latitude: 121.0008192569082300000000000', 3, '', 14, 1),
(116, '2024-12-14 03:55:01.330488', '12', 'Domestic Shorthair | Cat', 1, '[{\"added\": {}}]', 9, 1),
(117, '2024-12-14 03:55:09.089202', '13', 'Persian | Cat', 1, '[{\"added\": {}}]', 9, 1),
(118, '2024-12-14 03:55:12.344055', '14', 'Siamese | Cat', 1, '[{\"added\": {}}]', 9, 1),
(119, '2024-12-14 03:55:14.796028', '15', 'Maine Coon | Cat', 1, '[{\"added\": {}}]', 9, 1),
(120, '2024-12-14 03:55:17.332859', '16', 'Bengal | Cat', 1, '[{\"added\": {}}]', 9, 1),
(121, '2024-12-14 03:55:22.084448', '17', 'Abyssinian | Cat', 1, '[{\"added\": {}}]', 9, 1),
(122, '2024-12-14 03:55:24.567346', '18', 'Ragdoll | Cat', 1, '[{\"added\": {}}]', 9, 1),
(123, '2024-12-14 03:55:26.966439', '19', 'British Shorthair | Cat', 1, '[{\"added\": {}}]', 9, 1),
(124, '2024-12-14 03:55:29.221013', '20', 'Sphynx | Cat', 1, '[{\"added\": {}}]', 9, 1),
(125, '2024-12-14 03:55:31.731778', '21', 'Scottish Fold | Cat', 1, '[{\"added\": {}}]', 9, 1),
(126, '2024-12-14 03:55:34.152020', '22', 'Russian Blue | Cat', 1, '[{\"added\": {}}]', 9, 1),
(127, '2024-12-14 03:55:37.327006', '23', 'Russian Blue | Cat', 1, '[{\"added\": {}}]', 9, 1),
(128, '2024-12-14 03:55:39.957200', '24', 'Birman | Cat', 1, '[{\"added\": {}}]', 9, 1),
(129, '2024-12-14 03:55:44.665471', '25', 'Oriental Shorthair | Cat', 1, '[{\"added\": {}}]', 9, 1),
(130, '2024-12-14 03:55:47.402696', '26', 'Exotic Shorthair | Cat', 1, '[{\"added\": {}}]', 9, 1),
(131, '2024-12-14 03:55:50.898597', '27', 'Turkish Angora | Cat', 1, '[{\"added\": {}}]', 9, 1),
(132, '2024-12-14 03:56:26.229957', '28', 'Aspin | Dog', 1, '[{\"added\": {}}]', 9, 1),
(133, '2024-12-14 03:56:29.133614', '29', 'Shih Tzu | Dog', 1, '[{\"added\": {}}]', 9, 1),
(134, '2024-12-14 03:56:31.280873', '30', 'Poodle | Dog', 1, '[{\"added\": {}}]', 9, 1),
(135, '2024-12-14 03:56:35.507336', '31', 'Chihuahua | Dog', 1, '[{\"added\": {}}]', 9, 1),
(136, '2024-12-14 03:56:40.351304', '32', 'Maltese | Dog', 1, '[{\"added\": {}}]', 9, 1),
(137, '2024-12-14 03:56:43.492791', '33', 'Dachshund | Dog', 1, '[{\"added\": {}}]', 9, 1),
(138, '2024-12-14 03:56:46.465992', '34', 'Pomeranian | Dog', 1, '[{\"added\": {}}]', 9, 1),
(139, '2024-12-14 03:56:49.648554', '35', 'Beagle | Dog', 1, '[{\"added\": {}}]', 9, 1),
(140, '2024-12-14 03:56:56.240468', '36', 'Beagle | Dog', 1, '[{\"added\": {}}]', 9, 1),
(141, '2024-12-14 03:57:00.276959', '37', 'Pomeranian | Dog', 1, '[{\"added\": {}}]', 9, 1),
(142, '2024-12-14 03:57:05.715898', '38', 'Labrador Retriever | Dog', 1, '[{\"added\": {}}]', 9, 1),
(143, '2024-12-14 03:57:08.493337', '39', 'Pit Bull Terrier | Dog', 1, '[{\"added\": {}}]', 9, 1),
(144, '2024-12-14 03:57:12.445949', '40', 'Doberman Pinscher | Dog', 1, '[{\"added\": {}}]', 9, 1),
(145, '2024-12-14 03:57:15.434135', '41', 'Boxer | Dog', 1, '[{\"added\": {}}]', 9, 1),
(146, '2024-12-14 03:57:18.354526', '42', 'German Shepherd | Dog', 1, '[{\"added\": {}}]', 9, 1),
(147, '2024-12-14 03:57:22.460635', '43', 'Bulldog | Dog', 1, '[{\"added\": {}}]', 9, 1),
(148, '2024-12-14 03:57:25.753979', '44', 'Bulldog | Dog', 1, '[{\"added\": {}}]', 9, 1),
(149, '2024-12-14 03:57:28.698942', '45', 'Rottweiler | Dog', 1, '[{\"added\": {}}]', 9, 1),
(150, '2024-12-14 03:57:52.290551', '43', 'Bulldog | Dog', 3, '', 9, 1),
(151, '2024-12-14 03:57:52.290551', '22', 'Russian Blue | Cat', 3, '', 9, 1),
(152, '2024-12-14 03:58:05.946266', '35', 'Beagle | Dog', 3, '', 9, 1),
(153, '2024-12-14 03:58:16.182728', '37', 'Pomeranian | Dog', 3, '', 9, 1),
(154, '2024-12-14 04:01:25.518409', '2', 'Longitude: 121.07703690764009, Latitude: 14.634893631593737', 1, '[{\"added\": {}}]', 14, 1),
(155, '2024-12-14 04:04:43.174127', '2', 'PAWS Animal Rehabilitation Center', 1, '[{\"added\": {}}]', 7, 1),
(156, '2024-12-14 04:06:52.412129', '3', 'Longitude: 121.0313749816484, Latitude: 14.607985093900995', 1, '[{\"added\": {}}]', 14, 1),
(157, '2024-12-14 04:07:30.887166', '3', 'Aso, Pusa ATBP. Animal Shelter and Veterinary Services', 1, '[{\"added\": {}}]', 7, 1),
(158, '2024-12-14 04:10:28.926245', '4', 'Longitude: 121.04577669303559, Latitude: 14.580498163711894', 1, '[{\"added\": {}}]', 14, 1),
(159, '2024-12-14 04:10:34.996062', '4', 'Lara\'s Ark', 1, '[{\"added\": {}}]', 7, 1),
(160, '2024-12-14 04:10:44.152496', '3', 'Aso, Pusa ATBP. Animal Shelter and Veterinary Services', 2, '[{\"changed\": {\"fields\": [\"Email\"]}}]', 7, 1),
(161, '2024-12-14 04:17:47.323833', '7', 'Buddy', 1, '[{\"added\": {}}]', 8, 1),
(162, '2024-12-14 04:19:28.796327', '8', 'Buddy Image DB ID: 8', 1, '[{\"added\": {}}]', 10, 1),
(163, '2024-12-14 04:19:41.896261', '9', 'Buddy Image DB ID: 9', 1, '[{\"added\": {}}]', 10, 1),
(164, '2024-12-14 04:20:28.278201', '8', 'Luna', 1, '[{\"added\": {}}]', 8, 1),
(165, '2024-12-14 04:21:05.493027', '9', 'Max', 1, '[{\"added\": {}}]', 8, 1),
(166, '2024-12-14 04:21:29.581914', '10', 'Daisy', 1, '[{\"added\": {}}]', 8, 1),
(167, '2024-12-14 04:22:43.561860', '46', 'Terrier | Dog', 1, '[{\"added\": {}}]', 9, 1),
(168, '2024-12-14 04:23:11.917805', '11', 'Rocky', 1, '[{\"added\": {}}]', 8, 1),
(169, '2024-12-14 04:24:01.848669', '12', 'Charlie', 1, '[{\"added\": {}}]', 8, 1),
(170, '2024-12-14 04:24:32.464639', '13', 'Cici', 1, '[{\"added\": {}}]', 8, 1),
(171, '2024-12-14 04:25:13.653212', '47', 'Jack Russell Terrier | Dog', 1, '[{\"added\": {}}]', 9, 1),
(172, '2024-12-14 04:25:39.842787', '14', 'Rex', 1, '[{\"added\": {}}]', 8, 1),
(173, '2024-12-14 04:25:59.666420', '15', 'Coco', 1, '[{\"added\": {}}]', 8, 1),
(174, '2024-12-14 04:26:35.843207', '48', 'Golden Retriever | Dog', 1, '[{\"added\": {}}]', 9, 1),
(175, '2024-12-14 04:27:00.417907', '16', 'Bailey', 1, '[{\"added\": {}}]', 8, 1),
(176, '2024-12-14 04:29:10.982388', '49', 'Tuxedo | Cat', 1, '[{\"added\": {}}]', 9, 1),
(177, '2024-12-14 04:29:14.010123', '50', 'Orange Tabby | Cat', 1, '[{\"added\": {}}]', 9, 1),
(178, '2024-12-14 04:29:16.608070', '51', 'Calico | Cat', 1, '[{\"added\": {}}]', 9, 1),
(179, '2024-12-14 04:29:21.513247', '52', 'Black | Cat', 1, '[{\"added\": {}}]', 9, 1),
(180, '2024-12-14 04:29:25.640872', '53', 'Tabby | Cat', 1, '[{\"added\": {}}]', 9, 1),
(181, '2024-12-14 04:29:28.914719', '54', 'Tortoise Shell | Cat', 1, '[{\"added\": {}}]', 9, 1),
(182, '2024-12-14 04:30:05.821255', '17', 'Mittens', 1, '[{\"added\": {}}]', 8, 1),
(183, '2024-12-14 04:30:25.866868', '18', 'Simba', 1, '[{\"added\": {}}]', 8, 1),
(184, '2024-12-14 04:32:11.872045', '19', 'Lily', 1, '[{\"added\": {}}]', 8, 1),
(185, '2024-12-14 04:32:26.519545', '1', 'Puppy | Kitten', 2, '[{\"changed\": {\"fields\": [\"Age\"]}}]', 13, 1),
(186, '2024-12-14 04:32:56.133518', '20', 'Shadow', 1, '[{\"added\": {}}]', 8, 1),
(187, '2024-12-14 04:33:14.106174', '21', 'Bella', 1, '[{\"added\": {}}]', 8, 1),
(188, '2024-12-14 04:33:40.524879', '22', 'Chloe', 1, '[{\"added\": {}}]', 8, 1),
(189, '2024-12-14 04:34:18.077146', '23', 'Oliver', 1, '[{\"added\": {}}]', 8, 1),
(190, '2024-12-14 04:34:35.838845', '24', 'Skyler', 1, '[{\"added\": {}}]', 8, 1),
(191, '2024-12-14 04:34:54.436968', '25', 'Leo', 1, '[{\"added\": {}}]', 8, 1),
(192, '2024-12-14 04:35:35.727785', '26', 'Tiger', 1, '[{\"added\": {}}]', 8, 1),
(193, '2024-12-14 04:37:48.632577', '4', 'Senior (7+ Years)', 2, '[{\"changed\": {\"fields\": [\"Age\"]}}]', 13, 1),
(194, '2024-12-14 04:37:51.892846', '3', 'Adult (3 - 7 Years)', 2, '[{\"changed\": {\"fields\": [\"Age\"]}}]', 13, 1),
(195, '2024-12-14 04:37:56.901123', '2', 'Young (1 - 3 Years)', 2, '[{\"changed\": {\"fields\": [\"Age\"]}}]', 13, 1),
(196, '2024-12-14 04:37:59.934716', '1', 'Puppy | Kitten (0 - 1 Year)', 2, '[{\"changed\": {\"fields\": [\"Age\"]}}]', 13, 1),
(197, '2024-12-14 04:38:07.380687', '4', 'XL (40+ kg)', 2, '[{\"changed\": {\"fields\": [\"Size\"]}}]', 11, 1),
(198, '2024-12-14 04:38:10.148272', '3', 'L (25 - 40 kg)', 2, '[{\"changed\": {\"fields\": [\"Size\"]}}]', 11, 1),
(199, '2024-12-14 04:38:15.231675', '2', 'M (10 - 25 kg)', 2, '[{\"changed\": {\"fields\": [\"Size\"]}}]', 11, 1),
(200, '2024-12-14 04:38:17.990193', '1', 'S (0 - 10 kg)', 2, '[{\"changed\": {\"fields\": [\"Size\"]}}]', 11, 1),
(201, '2024-12-14 04:39:39.463781', '10', 'Bella Image DB ID: 10', 1, '[{\"added\": {}}]', 10, 1),
(202, '2024-12-14 04:39:47.938631', '11', 'Bella Image DB ID: 11', 1, '[{\"added\": {}}]', 10, 1),
(203, '2024-12-14 04:40:12.504225', '12', 'Chloe Image DB ID: 12', 1, '[{\"added\": {}}]', 10, 1),
(204, '2024-12-14 04:40:17.297163', '13', 'Chloe Image DB ID: 13', 1, '[{\"added\": {}}]', 10, 1),
(205, '2024-12-14 04:40:36.972810', '14', 'Leo Image DB ID: 14', 1, '[{\"added\": {}}]', 10, 1),
(206, '2024-12-14 04:40:43.188208', '15', 'Leo Image DB ID: 15', 1, '[{\"added\": {}}]', 10, 1),
(207, '2024-12-14 04:41:03.450924', '16', 'Max Image DB ID: 16', 1, '[{\"added\": {}}]', 10, 1),
(208, '2024-12-14 04:41:09.645480', '17', 'Max Image DB ID: 17', 1, '[{\"added\": {}}]', 10, 1),
(209, '2024-12-14 05:19:39.905953', '18', 'Bailey Image DB ID: 18', 1, '[{\"added\": {}}]', 10, 1),
(210, '2024-12-14 05:19:45.034272', '19', 'Bailey Image DB ID: 19', 1, '[{\"added\": {}}]', 10, 1),
(211, '2024-12-14 05:20:01.570497', '20', 'Charlie Image DB ID: 20', 1, '[{\"added\": {}}]', 10, 1),
(212, '2024-12-14 05:20:06.117406', '21', 'Charlie Image DB ID: 21', 1, '[{\"added\": {}}]', 10, 1),
(213, '2024-12-14 05:20:24.298880', '22', 'Cici Image DB ID: 22', 1, '[{\"added\": {}}]', 10, 1),
(214, '2024-12-14 05:20:30.758901', '23', 'Cici Image DB ID: 23', 1, '[{\"added\": {}}]', 10, 1),
(215, '2024-12-14 05:20:38.558872', '24', 'Coco Image DB ID: 24', 1, '[{\"added\": {}}]', 10, 1),
(216, '2024-12-14 05:20:43.146611', '25', 'Coco Image DB ID: 25', 1, '[{\"added\": {}}]', 10, 1),
(217, '2024-12-14 05:21:01.442272', '26', 'Daisy Image DB ID: 26', 1, '[{\"added\": {}}]', 10, 1),
(218, '2024-12-14 05:21:06.210435', '27', 'Daisy Image DB ID: 27', 1, '[{\"added\": {}}]', 10, 1),
(219, '2024-12-14 05:21:15.540357', '28', 'Lily Image DB ID: 28', 1, '[{\"added\": {}}]', 10, 1),
(220, '2024-12-14 05:21:20.642850', '29', 'Lily Image DB ID: 29', 1, '[{\"added\": {}}]', 10, 1),
(221, '2024-12-14 05:21:29.170750', '30', 'Luna Image DB ID: 30', 1, '[{\"added\": {}}]', 10, 1),
(222, '2024-12-14 05:21:33.560762', '31', 'Luna Image DB ID: 31', 1, '[{\"added\": {}}]', 10, 1),
(223, '2024-12-14 05:21:41.419179', '32', 'Mittens Image DB ID: 32', 1, '[{\"added\": {}}]', 10, 1),
(224, '2024-12-14 05:21:47.846891', '33', 'Mittens Image DB ID: 33', 1, '[{\"added\": {}}]', 10, 1),
(225, '2024-12-14 05:21:56.640466', '34', 'Oliver Image DB ID: 34', 1, '[{\"added\": {}}]', 10, 1),
(226, '2024-12-14 05:22:05.204004', '35', 'Oliver Image DB ID: 35', 1, '[{\"added\": {}}]', 10, 1),
(227, '2024-12-14 05:22:15.006790', '36', 'Rex Image DB ID: 36', 1, '[{\"added\": {}}]', 10, 1),
(228, '2024-12-14 05:22:19.427451', '37', 'Rex Image DB ID: 37', 1, '[{\"added\": {}}]', 10, 1),
(229, '2024-12-14 05:22:29.609379', '38', 'Rocky Image DB ID: 38', 1, '[{\"added\": {}}]', 10, 1),
(230, '2024-12-14 05:23:00.803595', '39', 'Rocky Image DB ID: 39', 1, '[{\"added\": {}}]', 10, 1),
(231, '2024-12-14 05:23:23.469038', '40', 'Shadow Image DB ID: 40', 1, '[{\"added\": {}}]', 10, 1),
(232, '2024-12-14 05:23:27.975542', '41', 'Shadow Image DB ID: 41', 1, '[{\"added\": {}}]', 10, 1),
(233, '2024-12-14 05:23:36.038100', '42', 'Simba Image DB ID: 42', 1, '[{\"added\": {}}]', 10, 1),
(234, '2024-12-14 05:23:42.015550', '43', 'Simba Image DB ID: 43', 1, '[{\"added\": {}}]', 10, 1),
(235, '2024-12-14 05:23:49.090285', '44', 'Skyler Image DB ID: 44', 1, '[{\"added\": {}}]', 10, 1),
(236, '2024-12-14 05:23:55.587611', '45', 'Simba Image DB ID: 45', 1, '[{\"added\": {}}]', 10, 1),
(237, '2024-12-14 05:24:12.634569', '45', 'Skyler Image DB ID: 45', 2, '[{\"changed\": {\"fields\": [\"Pet\", \"Image\"]}}]', 10, 1),
(238, '2024-12-15 02:18:25.247575', '46', 'Tiger Image DB ID: 46', 1, '[{\"added\": {}}]', 10, 1),
(239, '2024-12-15 02:18:31.192953', '47', 'Tiger Image DB ID: 47', 1, '[{\"added\": {}}]', 10, 1),
(240, '2024-12-15 02:19:56.137288', '21', 'Bella', 2, '[{\"changed\": {\"fields\": [\"Shelter\"]}}]', 8, 1),
(241, '2024-12-15 02:19:59.706277', '17', 'Mittens', 2, '[{\"changed\": {\"fields\": [\"Shelter\"]}}]', 8, 1),
(242, '2024-12-15 02:20:10.079942', '20', 'Shadow', 2, '[{\"changed\": {\"fields\": [\"Shelter\"]}}]', 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(13, 'app', 'age'),
(16, 'app', 'animal'),
(9, 'app', 'breed'),
(12, 'app', 'gender'),
(14, 'app', 'geolocation'),
(10, 'app', 'image'),
(8, 'app', 'pet'),
(7, 'app', 'shelter'),
(11, 'app', 'size'),
(15, 'app', 'volunteer'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-12-05 11:51:43.885841'),
(2, 'auth', '0001_initial', '2024-12-05 11:51:44.228937'),
(3, 'admin', '0001_initial', '2024-12-05 11:51:44.319404'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-12-05 11:51:44.340898'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-12-05 11:51:44.361296'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-12-05 11:51:44.435865'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-12-05 11:51:44.483023'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-12-05 11:51:44.526227'),
(9, 'auth', '0004_alter_user_username_opts', '2024-12-05 11:51:44.541835'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-12-05 11:51:44.592150'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-12-05 11:51:44.601031'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-12-05 11:51:44.620473'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-12-05 11:51:44.643762'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-12-05 11:51:44.669888'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-12-05 11:51:44.700862'),
(16, 'auth', '0011_update_proxy_permissions', '2024-12-05 11:51:44.715519'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-12-05 11:51:44.746790'),
(18, 'sessions', '0001_initial', '2024-12-05 11:51:44.784629'),
(22, 'app', '0001_initial', '2024-12-06 02:04:07.400249'),
(23, 'app', '0002_remove_image_pet_image_content_type_image_object_id', '2024-12-06 02:17:48.102356'),
(24, 'app', '0003_remove_image_content_type_remove_image_object_id_and_more', '2024-12-06 02:21:11.285556'),
(25, 'app', '0004_animal', '2024-12-08 02:37:19.463684'),
(26, 'app', '0005_pet_animal', '2024-12-08 02:37:19.582274'),
(27, 'app', '0006_remove_pet_animal_breed_animal_type_and_more', '2024-12-08 02:37:20.194811'),
(28, 'app', '0007_alter_breed_name', '2024-12-11 04:24:57.143669'),
(29, 'app', '0008_alter_geolocation_latitude_and_more', '2024-12-13 06:03:54.273706'),
(30, 'app', '0009_alter_geolocation_latitude_and_more', '2024-12-13 06:03:54.337425'),
(31, 'app', '0010_alter_geolocation_latitude_and_more', '2024-12-13 06:05:06.032433'),
(32, 'app', '0011_alter_breed_name', '2024-12-14 03:52:50.294998'),
(33, 'app', '0012_alter_breed_name', '2024-12-14 03:54:50.598012'),
(34, 'app', '0013_alter_breed_name', '2024-12-14 03:58:45.564189'),
(35, 'app', '0014_alter_shelter_name', '2024-12-14 04:05:28.805555'),
(36, 'app', '0015_alter_pet_description_alter_pet_medical_description', '2024-12-14 04:17:16.718903'),
(37, 'app', '0016_alter_breed_name', '2024-12-14 04:22:31.670951'),
(38, 'app', '0017_alter_breed_name', '2024-12-14 04:25:03.253580'),
(39, 'app', '0018_alter_breed_name', '2024-12-14 04:26:29.438991'),
(40, 'app', '0019_alter_breed_name', '2024-12-14 04:28:57.410036'),
(41, 'app', '0020_alter_age_name', '2024-12-14 04:31:52.415471'),
(42, 'app', '0021_alter_age_name_alter_size_name', '2024-12-14 04:37:35.304116');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('f30dnlj9r5amk3iio1ltp92ovrj8z0sz', '.eJxVjEEOwiAQRe_C2hBmcEpx6b5nIDNApWpoUtqV8e7apAvd_vfef6nA21rC1vISpqQuCtTpdxOOj1x3kO5cb7OOc12XSfSu6IM2PcwpP6-H-3dQuJVvTZ2zkajjTACjtejwDISGSRDIRRA_sreGUbxNJloSY3r2zNFg70m9P6_lNr8:1tJCKe:GqoswDI1VhuKFIZybEWhzwgJJ_xbvhODxJUeOIO9Nss', '2024-12-19 13:55:52.809564');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_age`
--
ALTER TABLE `app_age`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_animal`
--
ALTER TABLE `app_animal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_breed`
--
ALTER TABLE `app_breed`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `app_breed_name_792873f2_uniq` (`name`),
  ADD KEY `app_breed_animal_type_id_6628ddb2_fk_app_animal_id` (`animal_type_id`);

--
-- Indexes for table `app_gender`
--
ALTER TABLE `app_gender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_geolocation`
--
ALTER TABLE `app_geolocation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_image`
--
ALTER TABLE `app_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_image_pet_id_7f397d5c_fk_app_pet_id` (`pet_id`);

--
-- Indexes for table `app_pet`
--
ALTER TABLE `app_pet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_pet_shelter_id_6e82e29d_fk_app_shelter_id` (`shelter_id`),
  ADD KEY `app_pet_size_id_9cb09a19_fk_app_size_id` (`size_id`),
  ADD KEY `app_pet_age_id_ca9849c2_fk_app_age_id` (`age_id`),
  ADD KEY `app_pet_breed_id_e6feb058_fk_app_breed_id` (`breed_id`),
  ADD KEY `app_pet_gender_id_84096a69_fk_app_gender_id` (`gender_id`);

--
-- Indexes for table `app_shelter`
--
ALTER TABLE `app_shelter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `location_id` (`location_id`);

--
-- Indexes for table `app_size`
--
ALTER TABLE `app_size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_volunteer`
--
ALTER TABLE `app_volunteer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_age`
--
ALTER TABLE `app_age`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_animal`
--
ALTER TABLE `app_animal`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `app_breed`
--
ALTER TABLE `app_breed`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `app_gender`
--
ALTER TABLE `app_gender`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `app_geolocation`
--
ALTER TABLE `app_geolocation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_image`
--
ALTER TABLE `app_image`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `app_pet`
--
ALTER TABLE `app_pet`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `app_shelter`
--
ALTER TABLE `app_shelter`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_size`
--
ALTER TABLE `app_size`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `app_volunteer`
--
ALTER TABLE `app_volunteer`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_breed`
--
ALTER TABLE `app_breed`
  ADD CONSTRAINT `app_breed_animal_type_id_6628ddb2_fk_app_animal_id` FOREIGN KEY (`animal_type_id`) REFERENCES `app_animal` (`id`);

--
-- Constraints for table `app_image`
--
ALTER TABLE `app_image`
  ADD CONSTRAINT `app_image_pet_id_7f397d5c_fk_app_pet_id` FOREIGN KEY (`pet_id`) REFERENCES `app_pet` (`id`);

--
-- Constraints for table `app_pet`
--
ALTER TABLE `app_pet`
  ADD CONSTRAINT `app_pet_age_id_ca9849c2_fk_app_age_id` FOREIGN KEY (`age_id`) REFERENCES `app_age` (`id`),
  ADD CONSTRAINT `app_pet_breed_id_e6feb058_fk_app_breed_id` FOREIGN KEY (`breed_id`) REFERENCES `app_breed` (`id`),
  ADD CONSTRAINT `app_pet_gender_id_84096a69_fk_app_gender_id` FOREIGN KEY (`gender_id`) REFERENCES `app_gender` (`id`),
  ADD CONSTRAINT `app_pet_shelter_id_6e82e29d_fk_app_shelter_id` FOREIGN KEY (`shelter_id`) REFERENCES `app_shelter` (`id`),
  ADD CONSTRAINT `app_pet_size_id_9cb09a19_fk_app_size_id` FOREIGN KEY (`size_id`) REFERENCES `app_size` (`id`);

--
-- Constraints for table `app_shelter`
--
ALTER TABLE `app_shelter`
  ADD CONSTRAINT `app_shelter_location_id_33d75a26_fk_app_geolocation_id` FOREIGN KEY (`location_id`) REFERENCES `app_geolocation` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
