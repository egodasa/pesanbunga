var express = require('express');
var router = express.Router();
var url = require('url');
var soket = require('../socketApi');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(sesi.username);
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var urutkan = '';
  switch(query_url.urutkan){
	case 'username_asc' : 
	  urutkan = ' order by username asc';
	  break;
	   
	case 'username_desc' : 
	  urutkan = ' order by username desc';
	  break;
	
	case 'nama_asc' : 
	  urutkan = ' order by nm_pengguna asc';
	  break;
	   
	case 'nama_desc' : 
	  urutkan = ' order by nm_pengguna desc';
	  break;
	case 'jenis' : 
	  urutkan = ' order by nm_jenis asc';
	  break;
	default :
	  urutkan = '';
  }
  if(query_url.cari == undefined){
    sql='select * from tbpengguna,tbjenis_pengguna where tbpengguna.id_jenis=tbjenis_pengguna.id_jenis'+urutkan+';';
  }
  else {
    sql='select distinct * from tbpengguna,tbjenis_pengguna where tbpengguna.id_jenis=tbjenis_pengguna.id_jenis or tbpengguna.username like "%'+mysql.escape(query_url.cari)+'%" or tbpengguna.nm_pengguna like "%'+mysql.escape(query_url.cari)+'%" or tbpengguna.email like "%'+mysql.escape(query_url.cari)+'%" or tbpengguna.nohp like "%'+mysql.escape(query_url.cari)+'%";';
  }
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.render('laporan-pengguna', {
      daftar_pengguna : rows,
      title: 'Data Pengguna'
      });
    }
    else console.log(e);
  });
});

router.get('/hapus', function(req, res, next){
var current_url = url.parse(req.url, true);
var query_url = current_url.query;
sql = 'DELETE FROM tbpengguna where id_pengguna='+mysql.escape(query_url.id_pengguna);
koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  res.redirect('/kelola/pengguna');
    }
    else console.log(e);
  });	
})
.post('/hapus', function(req, res, next){
	var pengguna = req.body.list_pengguna;
	sql = 'DELETE FROM tbpengguna where id_pengguna IN ('+pengguna+');';
    koneksi.query(sql, function(e, rows, f) {
    if (!e){
	  console.log(sql);
	  res.redirect('/kelola/pengguna');
    }
    else console.log(e);
  });	
});
router.get('/tambah', function(req, res, next){
  sql='SELECT * from tbjenis_pengguna';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  res.render('tambah-pengguna', {
	  title : 'Tambah Pengguna Baru',
	  jenis : rows
	  });
    }
    else console.log(e);
  });
});
router.post('/tambah', function(req, res, next){
  var username = req.body.Tusername;
  var pass = req.body.Tpassword;
  var nama = req.body.Tnm_pengguna;
  var email = req.body.Temail;
  var nohp = req.body.Tnohp;
  var id_jenis = req.body.Cjenis;
  sql='INSERT INTO tbpengguna (username,password,nm_pengguna,email,nohp,id_jenis) values ("'+mysql.escape(username)+'",md5("'+mysql.escape(pass)+'"),"'+mysql.escape(nama)+'","'+mysql.escape(email)+'","'+mysql.escape(nohp)+'",'+mysql.escape(id_jenis)+');';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  soket.pengguna_baru();
	  console.log(sql);
      res.redirect('/kelola/pengguna');
    }
    else {
		console.log(sql);
		console.log(e);
	}
  });	
});
router.get('/edit', function(req, res, next) {
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  sql='select * from tbpengguna,tbjenis_pengguna where tbpengguna.id_jenis=tbjenis_pengguna.id_jenis and tbpengguna.id_pengguna='+mysql.escape(query_url.id_pengguna)+' limit 1; select * from tbjenis_pengguna;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  res.render('edit-pengguna', {
	  title : 'Edit Informasi Pengguna',
	  data_pengguna : rows[0],
	  jenis_pengguna : rows[1]
	  });
    }
    else console.log(e);
  });
});
router.post('/edit', function(req, res, next){
  var current_url = url.parse(req.url, true);
  var query_url = current_url.query;
  var username = req.body.Tusername;
  var pass = req.body.Tpassword;
  var nama = req.body.Tnm_pengguna;
  var email = req.body.Temail;
  var nohp = req.body.Tnohp;
  var id_jenis = req.body.Cjenis;
  sql='UPDATE tbpengguna SET nm_pengguna='+mysql.escape(nama)+',email='+mysql.escape(email)+',nohp='+mysql.escape(nohp)+',id_jenis='+id_jenis+' WHERE id_pengguna='+query_url.id_pengguna+';';
  koneksi.query(sql, function(e, rows, f) {
    console.log(sql);
    if (!e) {
      res.redirect('/kelola/pengguna');
    }
    else {
		console.log(e);
	}
  });	
});
module.exports = router;
