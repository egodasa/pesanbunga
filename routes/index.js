var express = require('express');
var router = express.Router();
var soket = require('../socketApi');
router.get('/', function(req, res, next) {
  sql='select * from tbproduk,tbtipe_produk where tbproduk.id_tipe=tbtipe_produk.id_tipe and tbproduk.id_status_produk=1 order by tbproduk.id_produk asc;';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
      res.render('index', {
      daftar_produk : rows,
      title: 'Beranda',
      username : sesi.username
      });
    soket.notifikasi({ayam : "33"});
    }
  });
});
router.get('/login', function(req, res){
	if(!sesi.username){
		res.render('login.pug', {
			title : 'Login'
			})
		}
		else res.redirect('/');
})
.post('/login', function(req, res){
	var username = req.body.Tusername;
	var pass = req.body.Tpassword;
	sql='SELECT username, id_jenis,COUNT(*) as "hasil" FROM tbpengguna WHERE username='+mysql.escape(username)+' AND password=md5('+mysql.escape(pass)+');';
	koneksi.query(sql, function(e, rows, f){
		if(!e){
			if(rows[0].hasil == 1){
				sesi.username = req.body.Tusername;
				sesi.tipe = rows[0].id_jenis;
				res.redirect('/');
			}
			else {
				console.log('cek login : ' + rows[0].hasil)
				res.render('login.pug', {
				title : 'Login'
				})
			}
		}
		else console.log("error login : " + e);
		});
});
router.get('/registrasi', function(req, res){
	res.render('registrasi.pug', {
		title : 'Registrasi'
		});
});
router.post('/registrasi', function(req, res, next){
	var username = req.body.Tusername;
	var pass = req.body.Tpassword1;
	var nama = req.body.Tnama;
	var email = req.body.Temail;
	var nohp = req.body.Tnohp;
	req.checkBody(validasi);
	req.checkBody('Tpassword1','Password tidak cocok ...').equals(req.body.Tpassword2);
	req.getValidationResult().then(function(result){
		result.useFirstErrorOnly();
		var pesan = result.mapped();
		if(result.isEmpty() == false){
			if(pesan.Tusername == undefined){
				console.log("terjadi perubahan");
				pesan.Tusername ={
					param : "Tusername",
					msg : "betul",
					value : username
				};
			}
			if(pesan.Tpassword1 == undefined){
				console.log("terjadi perubahan");
				pesan.Tpassword1 ={
					param : "Tpassword1",
					msg : "betul",
					value : pass
				};
			}
			if(pesan.Tnama == undefined){
				console.log("terjadi perubahan");
				pesan.Tnama ={
					param : "Tnama",
					msg : "betul",
					value : nama
				};
			}
			if(pesan.Temail == undefined){
				console.log("terjadi perubahan");
				pesan.Temail ={
					param : "Temail",
					msg : "betul",
					value : email
				};
			}
			if(pesan.Tnohp == undefined){
				console.log("terjadi perubahan");
				pesan.Tnohp ={
					param : "Tnohp",
					msg : "betul",
					value : nohp
				};
			} 
			console.log("Bagian kedua : ");
			console.log(pesan.Tusername);
			res.render('registrasi.pug', {
			title : 'Registrasi',
			error : pesan
			});
		}
		else{
		sql = 'INSERT INTO tbpengguna (username,password,nm_pengguna,nohp,email) values ('+mysql.escape(username)+',md5('+mysql.escape(pass)+'),'+mysql.escape(nama)+','+mysql.escape(nohp)+','+mysql.escape(email)+');';
		koneksi.query(sql, function(e, rows, f){
			if(!e) res.redirect('/login');
			else console.log(e);
			})
		}
		});
});
router.get('/logout', function(req, res, next) {
  sesi.destroy(function(err){
	  if(err) res.send(err);
	  else res.redirect('/');
	  });
});
router.get('/contoh/:target', function(req, res, next) {
  var target = req.params.target;
  sql='select * from '+target+';';
  koneksi.query(sql, function(e, rows, f) {
    if (!e) {
		console.log(rows);
		var data = {
			hasil : rows,
			baris : rows.length
			};
		res.json(data);
    }
    else {
		console.log(sql);
		res.send(e);
	}
  });
});
module.exports = router;
