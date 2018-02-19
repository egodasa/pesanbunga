-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 24, 2017 at 02:59 PM
-- Server version: 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbshallom`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbjenis_acara`
--

CREATE TABLE `tbjenis_acara` (
  `id_acara` int(11) NOT NULL,
  `nm_acara` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbjenis_acara`
--

INSERT INTO `tbjenis_acara` (`id_acara`, `nm_acara`) VALUES
(13, 'Wisuda'),
(14, 'Duka Cita'),
(16, 'Selamatan'),
(17, 'Pernikahan');

-- --------------------------------------------------------

--
-- Table structure for table `tbjenis_pengguna`
--

CREATE TABLE `tbjenis_pengguna` (
  `id_jenis` int(11) NOT NULL,
  `nm_jenis` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbjenis_pengguna`
--

INSERT INTO `tbjenis_pengguna` (`id_jenis`, `nm_jenis`) VALUES
(1, 'Admin'),
(4, 'Pelanggan');

-- --------------------------------------------------------

--
-- Table structure for table `tbkota`
--

CREATE TABLE `tbkota` (
  `id_kota` int(11) NOT NULL,
  `nm_kota` varchar(50) NOT NULL,
  `hrg_kota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbkota`
--

INSERT INTO `tbkota` (`id_kota`, `nm_kota`, `hrg_kota`) VALUES
(5, 'Jambi', 300000),
(6, 'Padang', 100000),
(7, 'Pesisir Selatan', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `tbpembayaran`
--

CREATE TABLE `tbpembayaran` (
  `id_bayar` varchar(8) NOT NULL,
  `id_transaksi` varchar(7) NOT NULL,
  `nm_pembayar` varchar(50) NOT NULL,
  `no_rek` varchar(30) NOT NULL,
  `bukti` text NOT NULL,
  `tgl_konfirmasi` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `keterangan` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbpembayaran`
--

INSERT INTO `tbpembayaran` (`id_bayar`, `id_transaksi`, `nm_pembayar`, `no_rek`, `bukti`, `tgl_konfirmasi`, `keterangan`) VALUES
('BPS00002', 'PS00002', 'mandan', '23232', 'ss2.jpg', '2017-04-12 23:25:07', NULL),
('BPS00005', 'PS00005', 'Mandan', '1232123', 'Nissan-R34.jpg', '2017-04-16 19:29:27', NULL),
('BPS00010', 'PS00010', 'Dolores enim qui ', '34323423122', 'ss6.jpg', '2017-04-21 21:19:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbpengguna`
--

CREATE TABLE `tbpengguna` (
  `id_pengguna` int(11) NOT NULL,
  `username` varchar(12) NOT NULL,
  `password` text NOT NULL,
  `nm_pengguna` varchar(50) NOT NULL DEFAULT 'Fulan',
  `email` varchar(30) NOT NULL,
  `nohp` varchar(14) NOT NULL,
  `id_jenis` int(11) NOT NULL DEFAULT '4'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbpengguna`
--

INSERT INTO `tbpengguna` (`id_pengguna`, `username`, `password`, `nm_pengguna`, `email`, `nohp`, `id_jenis`) VALUES
(3, 'mandan', 'e070e2dd9634c6c078a59218cdca9e23', 'ssmandan', 'wobogddydsd@yahoo.comd', '081253133541', 1),
(5, 'pelanggan', 'e070e2dd9634c6c078a59218cdca9e23', 'Fulan', 'dfasjhasdasdasd@fae.com', '089514633946', 4),
(8, 'pelanggan2', 'e070e2dd9634c6c078a59218cdca9e23', 'Fulan', 'wobogddsaasdd@yahoo.com', '081994088114', 4),
(9, 'pogojohex', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 'Laborum Doloremque', 'gepynugudshy@yahoo.com', '081240635533', 1),
(10, 'hakog', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 'Fulan', 'paduzaj@hotmail.com', '087732184860', 4),
(11, 'vobufujot', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 'Officiis quas nihil', 'xiqod@gmail.com', '081278853633', 4),
(12, 'comandan', 'e070e2dd9634c6c078a59218cdca9e23', 'comandans', 'comandan@gmail.con', '089514633912', 4),
(13, 'hipyse', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', 'Qui anim eaq', 'repypss@gmail.com', '085231370341', 1),
(19, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'admin', '', '082384747630', 1),
(20, 'xavabak', '200820e3227815ed1756a6b531e7e0d2', 'Qui sed aut', 'dusedavuc@hotmail.com', '082174299904', 4),
(21, 'cibyn', '200820e3227815ed1756a6b531e7e0d2', 'Error voluptatem qui id ', 'nixy@yahoo.com', '089590979307', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbpesan_detail`
--

CREATE TABLE `tbpesan_detail` (
  `id_pesan_detail` int(11) NOT NULL,
  `id_pesan` varchar(8) DEFAULT NULL,
  `nm_pengirim` varchar(300) NOT NULL,
  `nm_penerima` varchar(300) NOT NULL,
  `id_produk` varchar(5) NOT NULL,
  `tgl_kirim` datetime NOT NULL,
  `id_kota` int(11) NOT NULL,
  `id_acara` int(11) NOT NULL,
  `alamat` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbpesan_detail`
--

INSERT INTO `tbpesan_detail` (`id_pesan_detail`, `id_pesan`, `nm_pengirim`, `nm_penerima`, `id_produk`, `tgl_kirim`, `id_kota`, `id_acara`, `alamat`) VALUES
(1, 'DPS00001', 'Ullamco enim sed ', 'Pariatur Cumque ', 'P0001', '2017-04-08 10:00:00', 6, 13, 'Commodo quae doloribus vero incididunt nobis qui do nihil qui nulla voluptatibus excepteur voluptate.'),
(2, 'DPS00002', 'Nulla autem', 'Obcaecati aliquip mollit autem ea', 'P0003', '2017-04-08 10:00:00', 7, 14, 'Dolorem nemo aut modi duis tempore, totam laborum rem itaque alias est aut necessitatibus minim hic soluta ea.'),
(3, 'DPS00002', 'Rerum enim ', 'Dicta id sed exercitationem delectus consectetur', 'P0002', '2017-04-08 10:00:00', 5, 16, 'Harum nemo earum voluptate ipsum dolor omnis sequi maxime aut qui itaque.'),
(4, 'DPS00003', 'Commodo aliquip rerum ', 'Voluptas sit quia cumque ', 'P0002', '2017-04-07 10:00:00', 7, 17, 'Enim ratione beatae quas labore voluptate velit, voluptatem. Laborum tempor.'),
(5, 'DPS00003', 'Nihil Nam porro natus ', 'orro doloribus dolore adipisicing vero fugiat consectetur', 'P0003', '2017-04-08 10:00:00', 5, 14, 'Esse doloribus est omnis expedita quis cillum nulla cupiditate maiores quo deserunt.'),
(6, 'DPS00003', 'Qui aperiam eos dolorum ', 'Incididunt irure recusandae', 'P0009', '2017-04-08 10:00:00', 7, 14, 'Tenetur est et eos facilis tempore, mollitia perferendis beatae tempora.'),
(7, 'DPS00004', 'Voluptatibus ', 'Provident pariatur ', 'P0001', '2017-04-08 10:00:00', 5, 17, 'Tenetur sint consequuntur porro dolorum est minima expedita sint voluptates eos nemo earum proident, dolore maxime.'),
(8, 'DPS00004', 'Neque odit voluptas ', 'oremque esse eos dolore', 'P0003', '2017-04-08 10:00:00', 5, 17, 'Debitis et voluptatem eaque in excepteur qui voluptas voluptatem. Deserunt quis exercitation fuga. Lorem quaerat ut aute quia.'),
(9, 'DPS00005', 'Nisi nostrud dicta', 'Est velit dolor ', 'P0003', '2017-04-08 13:00:00', 7, 17, 'Mollitia nostrum odio voluptatem dolor minus ullamco id nisi mollit quidem sint vel necessitatibus in dolor lorem odit magna.'),
(10, 'DPS00006', 'Velit soluta ', 'Incidunt eum', 'P0001', '2017-04-08 10:00:00', 6, 16, 'Eaque asperiores velit error et voluptate dignissimos est sit, eius ullam dolor ut est, eius voluptas.'),
(11, 'DPS00007', 'Reiciendis temporibus', 'Optio non nulla mollitia est sunt', 'P0004', '2017-04-08 10:00:00', 6, 17, 'Vel amet, voluptatem, quam commodo deserunt magnam tenetur est proident, quia dolore minus tempore, quia.'),
(12, 'DPS00007', 'Doloribus nemo ', 'Quia harum error', 'P0005', '2017-04-08 10:00:00', 6, 13, 'In doloremque deserunt amet, possimus, aut aliquip reprehenderit ipsum tempore, ratione hic aut voluptatum harum incidunt, optio.'),
(13, 'DPS00007', 'Eveniet enim ', 'Dolor doloremque l', 'P0003', '2017-04-08 10:00:00', 5, 17, 'Excepturi possimus, dolor odit et aliquip nulla sit, sunt eos, quaerat laudantium.'),
(14, 'DPS00008', 'Qui dolorem dolor consectetur reprehenderit qui Nam quo do minima voluptates esse optio ratione laboris illum', 'Aut vel reprehenderit lorem et porro maxime elit delectus omnis tempor ipsa commodi elit', 'P0008', '2017-04-08 10:00:00', 5, 14, 'Minim molestiae officiis dolor quis nihil ducimus, sunt, aliquid provident, exercitationem anim omnis voluptatem ratione distinctio.'),
(15, 'DPS0009', 'Labore voluptatem', 'ris repudiandae voluptas', 'P0009', '2017-04-08 10:00:00', 6, 17, 'Qui assumenda sit suscipit dolores nisi provident, qui eos, voluptatum labore laborum. Ut nulla.'),
(16, 'DPS00010', 'Do maiores saepe', 'Nesciunt perspiciatis', 'P0002', '2017-04-08 10:00:00', 5, 16, 'Explicabo. Aliquam molestias adipisci beatae et aut excepteur officia deserunt omnis lorem iure provident, et reprehenderit, sit et veniam, est.');

-- --------------------------------------------------------

--
-- Table structure for table `tbproduk`
--

CREATE TABLE `tbproduk` (
  `id_produk` varchar(5) NOT NULL,
  `id_tipe` int(11) NOT NULL,
  `gambar` text NOT NULL,
  `id_status_produk` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbproduk`
--

INSERT INTO `tbproduk` (`id_produk`, `id_tipe`, `gambar`, `id_status_produk`) VALUES
('P0001', 1, 'standar-12.jpg', 1),
('P0002', 2, 'jumbo-11.jpg', 1),
('P0003', 3, 'double-11.jpg', 2),
('P0004', 1, 'standar-21.jpg', 2),
('P0005', 1, 'standar-31.jpg', 2),
('P0006', 2, 'jumbo-22.jpg', 1),
('P0007', 2, 'jumbo-31.jpg', 1),
('P0008', 1, 'standar-41.jpg', 1),
('P0009', 3, 'double-13.jpg', 1),
('P0010', 3, 'double-22.jpg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbstatus_pembayaran`
--

CREATE TABLE `tbstatus_pembayaran` (
  `id_status_pembayaran` int(11) NOT NULL,
  `nm_status_pembayaran` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbstatus_pembayaran`
--

INSERT INTO `tbstatus_pembayaran` (`id_status_pembayaran`, `nm_status_pembayaran`) VALUES
(1, 'Diproses'),
(2, 'Ditolak'),
(3, 'Diterima'),
(4, 'Belum Dibayar');

-- --------------------------------------------------------

--
-- Table structure for table `tbstatus_produk`
--

CREATE TABLE `tbstatus_produk` (
  `id_status_produk` int(11) NOT NULL,
  `nm_status_produk` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbstatus_produk`
--

INSERT INTO `tbstatus_produk` (`id_status_produk`, `nm_status_produk`) VALUES
(1, 'Tersedia'),
(2, 'Tidak Tersedia');

-- --------------------------------------------------------

--
-- Table structure for table `tbstatus_transaksi`
--

CREATE TABLE `tbstatus_transaksi` (
  `id_status_transaksi` int(11) NOT NULL,
  `nm_status_transaksi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbstatus_transaksi`
--

INSERT INTO `tbstatus_transaksi` (`id_status_transaksi`, `nm_status_transaksi`) VALUES
(1, 'Belum Aktif'),
(2, 'Aktif'),
(3, 'Dibatalkan');

-- --------------------------------------------------------

--
-- Table structure for table `tbtipe_produk`
--

CREATE TABLE `tbtipe_produk` (
  `id_tipe` int(11) NOT NULL,
  `nm_tipe` varchar(30) NOT NULL,
  `hrg_tipe` int(11) NOT NULL,
  `ukuran` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbtipe_produk`
--

INSERT INTO `tbtipe_produk` (`id_tipe`, `nm_tipe`, `hrg_tipe`, `ukuran`) VALUES
(1, 'Standar', 200000, '1,5m x 2m'),
(2, 'Jumbo', 250000, '2m x 2m'),
(3, 'Double', 400000, '4m x 2m');

-- --------------------------------------------------------

--
-- Table structure for table `tbtransaksi`
--

CREATE TABLE `tbtransaksi` (
  `id_transaksi` varchar(7) NOT NULL,
  `id_pengguna` int(11) NOT NULL,
  `id_pesan` varchar(8) NOT NULL,
  `tgl_pesan` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_status_transaksi` int(11) NOT NULL DEFAULT '1',
  `id_status_pembayaran` int(11) NOT NULL DEFAULT '4',
  `jumlah` int(11) NOT NULL DEFAULT '1',
  `hrg_total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbtransaksi`
--

INSERT INTO `tbtransaksi` (`id_transaksi`, `id_pengguna`, `id_pesan`, `tgl_pesan`, `id_status_transaksi`, `id_status_pembayaran`, `jumlah`, `hrg_total`) VALUES
('PS00001', 3, 'DPS00001', '2017-04-12 06:43:34', 2, 3, 1, 300000),
('PS00002', 8, 'DPS00002', '2017-04-12 19:09:38', 1, 2, 2, 1050000),
('PS00003', 8, 'DPS00003', '2017-04-12 23:11:44', 3, 4, 3, 1550000),
('PS00004', 12, 'DPS00004', '2017-04-16 19:22:33', 3, 4, 2, 1200000),
('PS00005', 12, 'DPS00005', '2017-04-16 19:24:43', 1, 2, 1, 500000),
('PS00006', 5, 'DPS00006', '2017-04-20 21:20:37', 3, 4, 1, 300000),
('PS00010', 8, 'DPS00010', '2017-04-21 21:18:47', 2, 3, 1, 550000),
('PS0009', 3, 'DPS0009', '2017-04-21 21:16:48', 2, 3, 1, 500000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbjenis_acara`
--
ALTER TABLE `tbjenis_acara`
  ADD PRIMARY KEY (`id_acara`),
  ADD KEY `id_acara` (`id_acara`);

--
-- Indexes for table `tbjenis_pengguna`
--
ALTER TABLE `tbjenis_pengguna`
  ADD PRIMARY KEY (`id_jenis`),
  ADD KEY `id_jenis` (`id_jenis`);

--
-- Indexes for table `tbkota`
--
ALTER TABLE `tbkota`
  ADD PRIMARY KEY (`id_kota`),
  ADD KEY `id_kota` (`id_kota`);

--
-- Indexes for table `tbpembayaran`
--
ALTER TABLE `tbpembayaran`
  ADD PRIMARY KEY (`id_bayar`),
  ADD KEY `id_pesan` (`id_transaksi`);

--
-- Indexes for table `tbpengguna`
--
ALTER TABLE `tbpengguna`
  ADD PRIMARY KEY (`id_pengguna`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `nohp` (`nohp`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `id_pengguna` (`id_pengguna`);

--
-- Indexes for table `tbpesan_detail`
--
ALTER TABLE `tbpesan_detail`
  ADD PRIMARY KEY (`id_pesan_detail`),
  ADD KEY `id_transaksi` (`id_pesan`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_kota` (`id_kota`),
  ADD KEY `id_acara` (`id_acara`);

--
-- Indexes for table `tbproduk`
--
ALTER TABLE `tbproduk`
  ADD PRIMARY KEY (`id_produk`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_tipe` (`id_tipe`),
  ADD KEY `id_status_produk` (`id_status_produk`);

--
-- Indexes for table `tbstatus_pembayaran`
--
ALTER TABLE `tbstatus_pembayaran`
  ADD PRIMARY KEY (`id_status_pembayaran`),
  ADD KEY `id_status_pembayaran` (`id_status_pembayaran`);

--
-- Indexes for table `tbstatus_produk`
--
ALTER TABLE `tbstatus_produk`
  ADD PRIMARY KEY (`id_status_produk`),
  ADD KEY `id_status_produk` (`id_status_produk`);

--
-- Indexes for table `tbstatus_transaksi`
--
ALTER TABLE `tbstatus_transaksi`
  ADD PRIMARY KEY (`id_status_transaksi`),
  ADD KEY `id_status_transaksi` (`id_status_transaksi`),
  ADD KEY `id_status_transaksi_2` (`id_status_transaksi`);

--
-- Indexes for table `tbtipe_produk`
--
ALTER TABLE `tbtipe_produk`
  ADD PRIMARY KEY (`id_tipe`),
  ADD KEY `id_tipe` (`id_tipe`);

--
-- Indexes for table `tbtransaksi`
--
ALTER TABLE `tbtransaksi`
  ADD PRIMARY KEY (`id_transaksi`),
  ADD KEY `id_pengguna` (`id_pengguna`),
  ADD KEY `id_pesan` (`id_transaksi`),
  ADD KEY `id_status_transaksi` (`id_status_transaksi`),
  ADD KEY `id_status_pembayaran` (`id_status_pembayaran`),
  ADD KEY `id_pesan_2` (`id_pesan`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbjenis_acara`
--
ALTER TABLE `tbjenis_acara`
  MODIFY `id_acara` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `tbjenis_pengguna`
--
ALTER TABLE `tbjenis_pengguna`
  MODIFY `id_jenis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbkota`
--
ALTER TABLE `tbkota`
  MODIFY `id_kota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `tbpengguna`
--
ALTER TABLE `tbpengguna`
  MODIFY `id_pengguna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `tbpesan_detail`
--
ALTER TABLE `tbpesan_detail`
  MODIFY `id_pesan_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `tbstatus_pembayaran`
--
ALTER TABLE `tbstatus_pembayaran`
  MODIFY `id_status_pembayaran` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbstatus_produk`
--
ALTER TABLE `tbstatus_produk`
  MODIFY `id_status_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbstatus_transaksi`
--
ALTER TABLE `tbstatus_transaksi`
  MODIFY `id_status_transaksi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbtipe_produk`
--
ALTER TABLE `tbtipe_produk`
  MODIFY `id_tipe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbpembayaran`
--
ALTER TABLE `tbpembayaran`
  ADD CONSTRAINT `fk_id_transaksi` FOREIGN KEY (`id_transaksi`) REFERENCES `tbtransaksi` (`id_transaksi`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbpengguna`
--
ALTER TABLE `tbpengguna`
  ADD CONSTRAINT `fk_id_jenis_pengguna` FOREIGN KEY (`id_jenis`) REFERENCES `tbjenis_pengguna` (`id_jenis`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbpesan_detail`
--
ALTER TABLE `tbpesan_detail`
  ADD CONSTRAINT `fk_id_acara` FOREIGN KEY (`id_acara`) REFERENCES `tbjenis_acara` (`id_acara`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_kota` FOREIGN KEY (`id_kota`) REFERENCES `tbkota` (`id_kota`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_produk` FOREIGN KEY (`id_produk`) REFERENCES `tbproduk` (`id_produk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbproduk`
--
ALTER TABLE `tbproduk`
  ADD CONSTRAINT `fk_id_status_produk` FOREIGN KEY (`id_status_produk`) REFERENCES `tbstatus_produk` (`id_status_produk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipe_produk` FOREIGN KEY (`id_tipe`) REFERENCES `tbtipe_produk` (`id_tipe`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbtransaksi`
--
ALTER TABLE `tbtransaksi`
  ADD CONSTRAINT `fk_id_status_pembahyara` FOREIGN KEY (`id_status_pembayaran`) REFERENCES `tbstatus_pembayaran` (`id_status_pembayaran`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_status_transaksi` FOREIGN KEY (`id_status_transaksi`) REFERENCES `tbstatus_transaksi` (`id_status_transaksi`),
  ADD CONSTRAINT `fk_pengguna` FOREIGN KEY (`id_pengguna`) REFERENCES `tbpengguna` (`id_pengguna`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_pesan_detail` FOREIGN KEY (`id_pesan`) REFERENCES `tbpesan_detail` (`id_pesan`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
