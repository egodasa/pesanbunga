var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var koneksi = require('../mysql_mod');
router.get('/', function(req, res, next) {
  sql='select * from tbjenis_pengguna;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-jenis-pengguna', {
      daftar_jenis_pengguna : rows,
      title: 'Data Jenis Pengguna'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_jenis = req.body.Tnm_jenis;
  sql='INSERT INTO tbjenis_pengguna (nm_jenis) values("'+nm_jenis+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/jenis-pengguna');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
router.get('/hapus', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='DELETE FROM tbjenis_pengguna where id_jenis='+query_url.id_jenis+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/jenis-pengguna');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbjenis_pengguna where id_jenis='+query_url.id_jenis+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-jenis-pengguna', {
      data : rows,
      title: 'Edit Jenis Pengguna'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var nm_jenis = req.body.Tnm_jenis;
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='UPDATE tbjenis_pengguna set nm_jenis='+mysql.escape(nm_jenis)+' WHERE id_jenis='+query_url.id_jenis+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/jenis-pengguna');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

