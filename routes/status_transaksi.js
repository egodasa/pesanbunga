var express = require('express');
var router = express.Router();
var url = require('url');
router.get('/', function(req, res, next) {
  sql='select * from tbstatus_transaksi;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-status-transaksi', {
      daftar_status_transaksi : rows,
      title: 'Data status transaksi'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_status_transaksi = req.body.Tnm_status_transaksi;
  sql='INSERT INTO tbstatus_transaksi (nm_status_transaksi) values("'+nm_status_transaksi+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-transaksi');
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
  sql='DELETE FROM tbstatus_transaksi where id_status_transaksi='+query_url.id_status_transaksi+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/status-transaksi');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbstatus_transaksi WHERE id_status_transaksi='+query_url.id_status_transaksi+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-status-transaksi', {
      data_status_transaksi : rows,
      title: 'Edit Data status transaksi'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var nm_status_transaksi = req.body.Tnm_status_transaksi;
  sql='UPDATE tbstatus_transaksi SET nm_status_transaksi='+mysql.escape(nm_status_transaksi)+' WHERE id_status_transaksi='+query_url.id_status_transaksi+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-transaksi');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

