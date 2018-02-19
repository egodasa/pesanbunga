var express = require('express');
var router = express.Router();
var url = require('url');
router.get('/', function(req, res, next) {
  sql='select * from tbstatus_pembayaran;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-status-pembayaran', {
      daftar_status_pembayaran : rows,
      title: 'Data status pembayaran'
      });
    }
    else console.log(e);
  });
});
router.post('/', function(req, res, next){
  var nm_status_pembayaran = req.body.Tnm_status_pembayaran;
  sql='INSERT INTO tbstatus_pembayaran (nm_status_pembayaran) values("'+nm_status_pembayaran+'");';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-pembayaran');
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
  sql='DELETE FROM tbstatus_pembayaran where id_status_pembayaran='+query_url.id_status_pembayaran+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/status-pembayaran');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbstatus_pembayaran WHERE id_status_pembayaran='+query_url.id_status_pembayaran+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('edit-status-pembayaran', {
      data_status_pembayaran : rows,
      title: 'Edit Data status pembayaran'
      });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var nm_status_pembayaran = req.body.Tnm_status_pembayaran;
  sql='UPDATE tbstatus_pembayaran SET nm_status_pembayaran='+mysql.escape(nm_status_pembayaran)+' WHERE id_status_pembayaran='+query_url.id_status_pembayaran+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.redirect('/kelola/status-pembayaran');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
module.exports = router;

