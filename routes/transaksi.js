var express = require('express');
var router = express.Router();
var url = require('url');
/* GET users listing. */
router.get('/', function(req, res, next) {
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
  if(sesi.tipe == 1){
	sql='select * from tbpengguna,tbstatus_pembayaran,tbtransaksi,tbstatus_transaksi where tbtransaksi.id_pengguna=tbpengguna.id_pengguna and tbtransaksi.id_status_pembayaran=tbstatus_pembayaran.id_status_pembayaran and tbtransaksi.id_status_transaksi=tbstatus_transaksi.id_status_transaksi';
  }
  else {
	sql='select * from tbpengguna,tbstatus_pembayaran,tbtransaksi,tbstatus_transaksi where tbtransaksi.id_pengguna=tbpengguna.id_pengguna and tbtransaksi.id_status_pembayaran=tbstatus_pembayaran.id_status_pembayaran and tbtransaksi.id_status_transaksi=tbstatus_transaksi.id_status_transaksi AND tbpengguna.username='+mysql.escape(sesi.username)+';';  
  }
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
	  console.log(sql);
      res.render('transaksi', {
      daftar_transaksi : rows,
      title: 'Daftar Transaksi/Pemesanan'
      });
    }
    else console.log(e);
  });
});
module.exports = router;
