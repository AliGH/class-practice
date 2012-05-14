-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 14, 2012 at 12:42 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ciw_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `author` varchar(32) NOT NULL,
  `desc` text NOT NULL,
  `price` int(11) NOT NULL,
  `more` text NOT NULL,
  `img` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `author`, `desc`, `price`, `more`, `img`) VALUES
(1, 'JavaScript: The Good Parts', 'Douglas Crockford', 'Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.', 25, 'Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.Describes the reliable features of JavaScript, covering such topics as syntax, objects, functions, arrays, regular expressions, inheritance, and methods.', 'bk1.jpg'),
(2, 'JavaScript: The Definitive Guide', 'David Flanagan', 'The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today''s best web development practices.', 30, 'The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today''s best web development practices.The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today''s best web development practices.', 'bk2.jpg'),
(3, 'JavaScript: A Beginner''s Guide', 'John Pollock', 'Designed for Easy Learning: Modules--Each concept is divided into logically organized modules (chapters), ideal for self-paced learning Critical Skills.', 14, 'Designed for Easy Learning: Modules--Each concept is divided into logically organized modules (chapters), ideal for self-paced learning Critical Skills.Designed for Easy Learning: Modules--Each concept is divided into logically organized modules (chapters), ideal for self-paced learning Critical Skills.', 'bk3.jpg'),
(4, 'Beginning PHP5', 'Dave Mercer', 'What is this book about? Beginning PHP5 is a complete tutorial in PHP5''s language features and functionality, beginning with the basics and building up to the design.', 60, 'What is this book about? Beginning PHP5 is a complete tutorial in PHP5''s language features and functionality, beginning with the basics and building up to the design and construction of complex data-driven Web sites.What is this book about? Beginning PHP5 is a complete tutorial in PHP5''s language features and functionality, beginning with the basics and building up to the design and construction of complex data-driven Web sites.', 'wrox1.jpg'),
(5, 'Design and Build Websites', 'Jon Duckett', 'A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS.', 13, 'A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.Introduces HTML and CSS in a way that makes them accessible to everyone—hobbyists, students, and professionals—and it''s full-color throughout Utilizes information graphics and lifestyle photography to explain the topics in a simple way that is engaging Boasts a unique structure that allows you to progress through the chapters from beginning to end or just dip into topics of particular interest at your leisure This educational book is one that you will enjoy picking up, reading, then referring back to. It will make you wish other technical topics were presented in such a simple, attractive and engaging way!', 'html-css.jpg'),
(6, 'Professional Ajax', 'Jeremy McPeak', 'Professional Ajax 2nd Edition provides a developer-level tutorial of Ajax techniques, patterns, and use cases. The book begins by exploring the roots of Ajax, covering how the evolution of the web and new technologies.', 26, 'Professional Ajax 2nd Edition provides a developer-level tutorial of Ajax techniques, patterns, and use cases. The book begins by exploring the roots of Ajax, covering how the evolution of the web and new technologies directly led to the development of Ajax techniques. A detailed discussion of how frames, JavaScript, cookies, XML, and XMLHttp requests (XHR) related to Ajax is included. After this introduction, the book moves on to cover the implementation of specific Ajax techniques. Request brokers such as hidden frames, dynamic iframes, and XHR are compared and contrasted, explaining when one method should be used over another. To make this discussion clearer, a brief overview of HTTP requests and responses is included.', 'pro-ajax.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
