var express = require('express');
var router = express.Router();
var url = require('url');
router.get('/', function(req, res, next) {
  sql='SELECT * FROM tbproduk,tbtipe_produk,tbstatus_produk WHERE tbproduk.id_status_produk=tbstatus_produk.id_status_produk and tbproduk.id_tipe=tbtipe_produk.id_tipe order by tbproduk.id_produk asc; SELECT * FROM tbtipe_produk;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-produk', {
      daftar_produk : rows[0],
      tipe_produk : rows[1],
      title: 'Data produk'
      });
    }
    else console.log(e);
  });
})
.post('/', function(req, res, next) {
  id_tipe = req.body.Ctipe;
  gambar = req.files.Tfoto.name;
  foto = req.files.Tfoto;
  var id_produk,id_produk_temp;
  sql='SELECT SUBSTR(id_produk,-4)+1 AS "id_produk" FROM tbproduk ORDER BY id_produk DESC LIMIT 1;'
  koneksi.query(sql, function(e, rows, f){
	  if(!e) {
		  //GENERATE ID_PRODUK
		  id_produk_temp = rows[0].id_produk;
		  if(id_produk_temp < 10) id_produk = 'P000'+id_produk_temp;
		  else if(id_produk_temp >= 10 && id_produk_temp < 100) id_produk = 'P00'+id_produk_temp;
		  else if(id_produk_temp >= 100 && id_produk_temp < 1000) id_produk = 'P0'+id_produk_temp;
		  else id_produk = 'P'+id_produk_temp;
		  koneksi.query('INSERT INTO tbproduk (id_produk, id_tipe, gambar) values('+mysql.escape(id_produk)+','+id_tipe+', '+mysql.escape(gambar)+');', function(e, rows, f) {
		    if (!e) {
				foto.mv('public/gambar/produk/'+gambar, function(err){
					if(!err) res.redirect('/kelola/produk');
					else return res.status(500).send(err);
					});
		    }
		    else {
				console.log(id_produk);
				console.log(sql);
				console.log(e);
				}
		  });
		  }
	  else console.log(e);
	  });
})
router.get('/hapus', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='DELETE FROM tbproduk where id_produk='+mysql.escape(query_url.id_produk)+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.redirect('/kelola/produk');
    }
    else console.log(e);
  });
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbproduk where id_produk='+mysql.escape(query_url.id_produk)+' limit 1; SELECT * from tbtipe_produk';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  res.render('edit-produk', {
	  title : 'Edit Informasi Produk',
	  data_produk : rows[0],
	  tipe_produk : rows[1]
	  });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var id_tipe = req.body.Ctipe;
  var ganti_gambar = req.body.ganti_foto;
  console.log(ganti_gambar);
  if(ganti_gambar == 'on') {
    var gambar = req.files.Tfoto.name;
    var foto = req.files.Tfoto;
    sql='UPDATE tbproduk SET id_tipe='+id_tipe+',gambar='+mysql.escape(gambar)+' WHERE id_produk='+mysql.escape(query_url.id_produk)+';';
	}
  else sql='UPDATE tbproduk SET id_tipe='+id_tipe+' WHERE id_produk='+mysql.escape(query_url.id_produk)+';';
  koneksi.query(sql, function(e, rows, f) {
    console.log(sql);
    if (!e) {
      res.redirect('/kelola/produk');
    }
    else {
		console.log(e);
	}
  });
});
module.exports = router;

