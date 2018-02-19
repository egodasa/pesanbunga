var socket_io = require('socket.io');
var io = socket_io();
var soket = {};

soket.io = io;

io.on('connection', function(socket){
	console.log('konek');
});
soket.notifikasi = function(nilai) {
    io.sockets.emit('hello', nilai);
}
soket.pengguna_baru = function(){
	io.sockets.broadcast('pengguna_baru',{});
};
module.exports = soket;
