var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var session = require('express-session');
var session_mysql = require('express-mysql-session')(session);
var fileUpload = require('express-fileupload');
var Promise = require('promise');
// routes
var index = require('./routes/index');
var pengguna = require('./routes/pengguna');
var jenis_pengguna = require('./routes/jenis_pengguna');
var kota = require('./routes/kota');
var acara = require('./routes/acara');
var produk = require('./routes/produk');
var tipe_produk = require('./routes/tipe_produk');
var status_produk = require('./routes/status_produk');
var status_transaksi = require('./routes/status_transaksi');
var status_pembayaran = require('./routes/status_pembayaran');
var transaksi = require('./routes/transaksi');
mysql = require('mysql');
koneksi = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'qwe123*iop',
		database : 'dbshallum',
		multipleStatements : true
		});
sesiStore = new session_mysql({
		host : 'localhost',
		user : 'root',
		password : 'qwe123*iop',
		database : 'dbshallum',
		checkExpirationInterval: 900000,
		expiration: 86400000,
		}, koneksi);
validasi = require('./form-validasi');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// session middleware 
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(session({
		secret : '7.5cm kwk42/L70',
		cookie: { maxAge: null },
	    saveUninitialized: true,
	    resave: 'true',
	    store : sesiStore
	    }));
app.use(function(req,res,next){
	res.set({'Access-Control-Allow-Origin' : '*'});
    sesi = req.session;
    res.locals = {
		username : sesi.username,
		tipe : sesi.tipe
		};
    next();
    });
app.use(validator({
	customValidators : require('./custom_validator')
}));
//ROUTES
app.use('/kelola/*', function(req, res, next){
	if(sesi.username){
		if(sesi.tipe != 1) res.redirect('/');
		else next();
		}
	else {
		res.redirect('/login');
	}
	});
app.use('/', index);
app.use('/kelola/pengguna', pengguna);
app.use('/kelola/jenis-pengguna', jenis_pengguna);
app.use('/kelola/kota', kota);
app.use('/kelola/acara', acara);
app.use('/kelola/produk', produk);
app.use('/kelola/tipe-produk', tipe_produk);
app.use('/kelola/status-produk', status_produk);
app.use('/kelola/status-transaksi', status_transaksi);
app.use('/kelola/status-pembayaran', status_pembayaran);
app.use('/kelola/transaksi', transaksi);
//app.use('/soket', soket);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providingerror in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
