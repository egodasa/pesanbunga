var express = require('express');
var router = express.Router();
var url = require('url');
var mysql = require('mysql');
var koneksi = require('../mysql_mod');
router.get('/', function(req, res, next) {
  sql='select * from tbkota;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-kota', {
      daftar_kota : rows,
      title: 'Data Kota'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
	var nm_kota = req.body.Tnm_kota;
	var hrg_kota = req.body.Thrg_kota;
	req.checkBody(validasi);
	req.getValidationResult().then(function(result){
		result.useFirstErrorOnly();
		if(result){
		var pesan = result.mapped();
		console.log(pesan.Tusername);
		sql='select * from tbkota;';
		  koneksi.query(sql, function(e, rows, f) { 
		    if (!e) {
		      res.render('laporan-kota', {
		      daftar_kota : rows, //INI DAFTAR KOTA
		      title: 'Data Kota',
		      Enm_kota : pesan.Tnm_kota,
			  Etarif : pesan.Thrg_kota,
		      });
		    }
		    else console.log(e);
		});
		}
		else{
		  sql='INSERT INTO tbkota (nm_kota,hrg_kota) values("'+nm_kota+'",'+hrg_kota+');';
		  koneksi.query(sql, function(e, rows, f) {
		    if (!e) {
			  console.log(sql);
		      res.redirect('/kelola/kota');
		    }
		    else {
				console.log(sql);
				console.log(e);
			}
		  });
		}	
});
});
router.get('/hapus', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='DELETE FROM tbkota where id_kota='+query_url.id_kota+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/kota');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbkota WHERE id_kota='+query_url.id_kota+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-kota', {
      data_kota : rows,
      title: 'Edit Data Kota'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var nm_kota = req.body.Tnm_kota;
  var hrg_kota = req.body.Thrg_kota;
  sql='UPDATE tbkota SET nm_kota='+mysql.escape(nm_kota)+',hrg_kota='+mysql.escape(hrg_kota)+' WHERE id_kota='+query_url.id_kota+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/kota');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

