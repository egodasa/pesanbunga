var express = require('express');
var url = require('url');
var mysql = require('mysql');
var koneksi = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'qwe123*iop',
database : 'dbshallom'
});
var pengguna = function(req, res, next) {
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
	  urutkan = ' ';
  }
  if(query_url.cari == ''){
    sql='select * from tbpengguna,tbjenis_pengguna where tbpengguna.id_jenis=tbjenis_pengguna.id_jenis'+urutkan+';';
  }
  else {
    sql='select distinct * from tbpengguna,tbjenis_pengguna where tbpengguna.id_jenis=tbjenis_pengguna.id_jenis and tbpengguna.username like "%'+query_url.cari+'%" or tbpengguna.nm_pengguna like "%'+query_url.cari+'%" or tbpengguna.email like "%'+query_url.cari+'%" or tbpengguna.nohp like "%'+query_url.cari+'%";';
  }
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('laporan-pengguna', {
      daftar_pengguna : rows,
      title: 'Data Pengguna'
      });
    }
    else console.log(e);
  });
module.exports = pengguna;
