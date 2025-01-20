# ************************************************************
# Sequel Ace SQL dump
# Version 20071
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.7.39)
# Database: sharedigm
# Generation Time: 2024-09-03 03:36:23 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# Dump of table connection_requests
# ------------------------------------------------------------

CREATE TABLE `connection_requests` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `connection_id` char(36) NOT NULL,
  `message` varchar(1024) DEFAULT NULL,
  `accepted_at` timestamp NULL DEFAULT NULL,
  `declined_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `friend_id` (`connection_id`),
  CONSTRAINT `connection_requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `connection_requests_ibfk_2` FOREIGN KEY (`connection_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table countries
# ------------------------------------------------------------

CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `iso` char(2) NOT NULL,
  `iso3` char(3) NOT NULL,
  `name` varchar(80) NOT NULL,
  `num_code` smallint(6) NOT NULL,
  `phone_code` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table email_verifications
# ------------------------------------------------------------

CREATE TABLE `email_verifications` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `email` varchar(100) NOT NULL DEFAULT '',
  `verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `email_verifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Project email verifications';



# Dump of table files
# ------------------------------------------------------------

CREATE TABLE `files` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `path` varchar(255) NOT NULL DEFAULT '',
  `text` blob NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table gestures
# ------------------------------------------------------------

CREATE TABLE `gestures` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `kind` varchar(32) NOT NULL,
  `sender_id` char(36) NOT NULL,
  `recipient_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table group_members
# ------------------------------------------------------------

CREATE TABLE `group_members` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `group_id` char(36) NOT NULL,
  `user_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `group_members_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `group_members_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table groups
# ------------------------------------------------------------

CREATE TABLE `groups` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `icon_path` varchar(1024) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table identity_providers
# ------------------------------------------------------------

CREATE TABLE `identity_providers` (
  `provider_code` varchar(100) NOT NULL,
  `title` varchar(256) NOT NULL DEFAULT '',
  `description` varchar(2000) NOT NULL DEFAULT '',
  `enabled_flag` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`provider_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table item_places
# ------------------------------------------------------------

CREATE TABLE `item_places` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `place_id` char(36) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dump of table links
# ------------------------------------------------------------

CREATE TABLE `links` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `path` varchar(1024) NOT NULL DEFAULT '',
  `editable` tinyint(1) NOT NULL DEFAULT '0',
  `message` varchar(1024) DEFAULT NULL,
  `hits` int(11) unsigned NOT NULL DEFAULT '0',
  `limit` int(11) unsigned DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `accessed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `links_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table migrations
# ------------------------------------------------------------

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `migration` varchar(255) NOT NULL DEFAULT '',
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table notifications
# ------------------------------------------------------------

CREATE TABLE `notifications` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `type` varchar(255) NOT NULL,
  `notifiable_id` char(36) NOT NULL,
  `notifiable_type` varchar(255) NOT NULL,
  `data` text NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_id_notifiable_type_index` (`notifiable_id`,`notifiable_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table password_resets
# ------------------------------------------------------------

CREATE TABLE `password_resets` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `key` varchar(100) NOT NULL,
  `user_id` char(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `password_resets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table places
# ------------------------------------------------------------

CREATE TABLE `places` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `zoom_level` float DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `places_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table sessions
# ------------------------------------------------------------

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL COMMENT 'primary key',
  `user_id` char(36) DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text,
  `payload` text NOT NULL,
  `last_activity` int(11) NOT NULL,
  UNIQUE KEY `sessions_id_unique` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table share_requests
# ------------------------------------------------------------

CREATE TABLE `share_requests` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `connection_id` char(36) NOT NULL,
  `share_id` char(36) DEFAULT NULL,
  `message` varchar(1024) DEFAULT NULL,
  `path` varchar(1024) NOT NULL DEFAULT '',
  `copy` tinyint(1) NOT NULL DEFAULT '0',
  `accepted_at` timestamp NULL DEFAULT NULL,
  `declined_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `friend_id` (`connection_id`),
  CONSTRAINT `share_requests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `share_requests_ibfk_2` FOREIGN KEY (`connection_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table shares
# ------------------------------------------------------------

CREATE TABLE `shares` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `owner_id` char(36) NOT NULL,
  `path` varchar(1024) NOT NULL DEFAULT '',
  `owner_path` varchar(1024) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `shares_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shares_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


# Dump of table user_accounts
# ------------------------------------------------------------

CREATE TABLE `user_accounts` (
  `user_id` char(36) NOT NULL COMMENT 'primary key',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(256) DEFAULT '',
  `email_verified_flag` tinyint(1) NOT NULL DEFAULT '0',
  `enabled_flag` tinyint(1) NOT NULL DEFAULT '0',
  `admin_flag` tinyint(1) NOT NULL DEFAULT '0',
  `logged_in` tinyint(1) NOT NULL DEFAULT '0',
  `user_disk_quota` varchar(16) DEFAULT '1G',
  `ultimate_login_at` timestamp NULL DEFAULT NULL,
  `penultimate_login_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_addresses
# ------------------------------------------------------------

CREATE TABLE `user_addresses` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `address_kind` varchar(16) DEFAULT '',
  `street_address` varchar(64) DEFAULT '',
  `apartment` varchar(64) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `postal_code` varchar(16) DEFAULT NULL,
  `country` varchar(80) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_affiliations
# ------------------------------------------------------------

CREATE TABLE `user_affiliations` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `role` varchar(64) DEFAULT NULL,
  `organization_name` varchar(64) DEFAULT NULL,
  `organization_website` varchar(256) DEFAULT NULL,
  `organization_unit` varchar(256) DEFAULT NULL,
  `from_year` year(4) DEFAULT NULL,
  `to_year` year(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_affiliations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_articles
# ------------------------------------------------------------

CREATE TABLE `user_articles` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `authors` varchar(1024) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `subjects` varchar(1024) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `journal` varchar(256) DEFAULT NULL,
  `publisher` varchar(256) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `issn_number` varchar(64) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_books
# ------------------------------------------------------------

CREATE TABLE `user_books` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `authors` varchar(1024) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `subjects` varchar(1024) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `publisher` varchar(256) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `isbn_number` varchar(64) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_books_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_email_addrs
# ------------------------------------------------------------

CREATE TABLE `user_email_addrs` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `email_addr_kind` varchar(8) NOT NULL DEFAULT '',
  `email_addr` varchar(64) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_email_addrs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_events
# ------------------------------------------------------------

CREATE TABLE `user_events` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `event_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_family_members
# ------------------------------------------------------------

CREATE TABLE `user_family_members` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `name` varchar(64) NOT NULL DEFAULT '',
  `relationship` varchar(32) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_family_members_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_favorites
# ------------------------------------------------------------

CREATE TABLE `user_favorites` (
  `user_id` char(36) NOT NULL,
  `category` varchar(256) NOT NULL DEFAULT '',
  `key` varchar(256) NOT NULL DEFAULT '',
  `value` varchar(256) DEFAULT NULL,
  `type` varchar(16) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_homes
# ------------------------------------------------------------

CREATE TABLE `user_homes` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `country` varchar(80) DEFAULT NULL,
  `from_year` int(4) DEFAULT NULL,
  `to_year` int(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_homes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_identities
# ------------------------------------------------------------

CREATE TABLE `user_identities` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `user_external_id` varchar(1000) DEFAULT NULL,
  `provider_code` varchar(100) NOT NULL DEFAULT '',
  `enabled_flag` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_invitations
# ------------------------------------------------------------

CREATE TABLE `user_invitations` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `inviter_id` char(36) NOT NULL,
  `invitee_name` varchar(64) NOT NULL DEFAULT '',
  `invitee_email` varchar(256) NOT NULL DEFAULT '',
  `message` varchar(1024) DEFAULT NULL,
  `accepted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `inviter_id` (`inviter_id`),
  CONSTRAINT `user_invitations_ibfk_1` FOREIGN KEY (`inviter_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_jobs
# ------------------------------------------------------------

CREATE TABLE `user_jobs` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `company_name` varchar(256) DEFAULT NULL,
  `company_website` varchar(256) DEFAULT NULL,
  `division` varchar(256) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `country` varchar(80) DEFAULT NULL,
  `achievements` varchar(1024) DEFAULT NULL,
  `awards` varchar(1024) DEFAULT NULL,
  `skills` varchar(1024) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_jobs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_patents
# ------------------------------------------------------------

CREATE TABLE `user_patents` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `authors` varchar(1024) DEFAULT NULL,
  `patent_kind` varchar(256) DEFAULT NULL,
  `title` varchar(256) DEFAULT NULL,
  `subjects` varchar(1024) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `patent_number` varchar(64) DEFAULT NULL,
  `url` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_patents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_phones
# ------------------------------------------------------------

CREATE TABLE `user_phones` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `phone_kind` varchar(16) NOT NULL DEFAULT '',
  `country_code` varchar(8) DEFAULT NULL,
  `area_code` varchar(8) DEFAULT NULL,
  `phone_number` varchar(16) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_phones_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_preferences
# ------------------------------------------------------------

CREATE TABLE `user_preferences` (
  `user_id` char(36) NOT NULL,
  `app` varchar(256) NOT NULL DEFAULT '',
  `key` varchar(256) NOT NULL DEFAULT '',
  `value` varchar(256) DEFAULT NULL,
  `type` varchar(16) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_preferences_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_profiles
# ------------------------------------------------------------

CREATE TABLE `user_profiles` (
  `user_id` char(36) NOT NULL COMMENT 'primary key',
  `cover_photo_path` varchar(1024) DEFAULT NULL,
  `profile_photo_path` varchar(1024) DEFAULT NULL,
  `bio` varchar(1024) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(8) DEFAULT NULL,
  `interests` varchar(1024) DEFAULT NULL,
  `likes` varchar(1024) DEFAULT NULL,
  `dislikes` varchar(1024) DEFAULT NULL,
  `skills` varchar(1024) DEFAULT NULL,
  `experiences` varchar(1024) DEFAULT NULL,
  `goals` varchar(1024) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_schools
# ------------------------------------------------------------

CREATE TABLE `user_schools` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `school_name` varchar(256) DEFAULT NULL,
  `school_website` varchar(256) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `country` varchar(64) DEFAULT NULL,
  `degree` varchar(256) DEFAULT NULL,
  `from_grade_level` int(2) DEFAULT NULL,
  `to_grade_level` int(2) DEFAULT NULL,
  `from_year` int(4) DEFAULT NULL,
  `to_year` int(4) DEFAULT NULL,
  `major_subject` varchar(256) DEFAULT NULL,
  `minor_subject` varchar(256) DEFAULT NULL,
  `sports` varchar(256) DEFAULT NULL,
  `clubs` varchar(256) DEFAULT NULL,
  `activities` varchar(256) DEFAULT NULL,
  `honors` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_schools_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_settings
# ------------------------------------------------------------

CREATE TABLE `user_settings` (
  `user_id` char(36) NOT NULL,
  `category` varchar(256) NOT NULL DEFAULT '',
  `key` varchar(256) NOT NULL DEFAULT '',
  `value` varchar(256) DEFAULT NULL,
  `type` varchar(16) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_settings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_storage
# ------------------------------------------------------------

CREATE TABLE `user_storage` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) DEFAULT NULL,
  `host` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `secret` varchar(255) DEFAULT NULL,
  `region` varchar(16) DEFAULT NULL,
  `bucket` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




# Dump of table user_websites
# ------------------------------------------------------------

CREATE TABLE `user_websites` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `user_id` char(36) NOT NULL,
  `website_kind` varchar(16) NOT NULL DEFAULT '',
  `protocol` varchar(8) NOT NULL DEFAULT 'http',
  `url` varchar(1024) NOT NULL DEFAULT '',
  `order` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_websites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

CREATE TABLE `users` (
  `id` char(36) NOT NULL COMMENT 'primary key',
  `honorific` varchar(8) DEFAULT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `preferred_name` varchar(32) DEFAULT NULL,
  `middle_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `titles` varchar(16) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
