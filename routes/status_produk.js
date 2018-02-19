var express = require('express');
var router = express.Router();
var url = require('url');
router.get('/', function(req, res, next) {
  sql='select * from tbstatus_produk;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-status-produk', {
      daftar_status_produk : rows,
      title: 'Data status produk'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_status_produk = req.body.Tnm_status_produk;
  sql='INSERT INTO tbstatus_produk (nm_status_produk) values("'+nm_status_produk+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-produk');
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
  sql='DELETE FROM tbstatus_produk where id_status_produk='+query_url.id_status_produk+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/status-produk');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbstatus_produk WHERE id_status_produk='+query_url.id_status_produk+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-status-produk', {
      data_status_produk : rows,
      title: 'Edit Data status produk'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var nm_status_produk = req.body.Tnm_status_produk;
  sql='UPDATE tbstatus_produk SET nm_status_produk='+mysql.escape(nm_status_produk)+' WHERE id_status_produk='+query_url.id_status_produk+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-produk');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

