var express = require('express');
var router = express.Router();
var url = require('url');
router.get('/', function(req, res, next) {
  sql='select * from tbtipe_produk;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-tipe-produk', {
      daftar_tipe_produk : rows,
      title: 'Data tipe produk'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_tipe_produk = req.body.Tnm_tipe_produk;
  var hrg_tipe = req.body.Thrg_tipe;
  var ukuran = req.body.Tukuran;
  sql='INSERT INTO tbtipe_produk (nm_tipe,hrg_tipe,ukuran) values("'+nm_tipe_produk+'",'+hrg_tipe+',"'+ukuran+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/tipe-produk');
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
  sql='DELETE FROM tbtipe_produk where id_tipe='+query_url.id_tipe+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/tipe-produk');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbtipe_produk WHERE id_tipe='+query_url.id_tipe+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-tipe-produk', {
      data_tipe_produk : rows,
      title: 'Edit tipe produk'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var nm_tipe = req.body.Tnm_tipe_produk;
  var hrg_tipe = req.body.Thrg_tipe;
  var ukuran = req.body.Tukuran;
  sql='UPDATE tbtipe_produk SET nm_tipe='+mysql.escape(nm_tipe)+',hrg_tipe='+mysql.escape(hrg_tipe)+',ukuran='+mysql.escape(ukuran)+' WHERE id_tipe='+query_url.id_tipe+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/tipe-produk');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

