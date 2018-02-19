var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var koneksi = require('../mysql_mod');
router.get('/', function(req, res, next) {
  sql='select * from tbjenis_acara;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-acara', {
      daftar_acara : rows,
      title: 'Data acara'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_acara = req.body.Tnm_acara;
  sql='INSERT INTO tbjenis_acara (nm_acara) values("'+nm_acara+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/acara');
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
  sql='DELETE FROM tbjenis_acara where id_acara='+query_url.id_acara+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/acara');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbjenis_acara WHERE id_acara='+query_url.id_acara+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-acara', {
      data_acara : rows,
      title: 'Edit Data acara'
      });
    }
    else console.log(e);
  });
})
.post('/edit', function(req, res, next){
  var nm_acara = req.body.Tnm_acara;
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='UPDATE tbjenis_acara SET nm_acara='+mysql.escape(nm_acara)+' WHERE id_acara='+query_url.id_acara+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/acara');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

