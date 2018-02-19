var mysql = require('mysql');
var koneksi = mysql.createConnection({
host : 'localhost',
user : 'root',
password : 'qwe123*iop',
database : 'dbshallum',
multipleStatements : true
});
module.exports = koneksi;
