$(document).ready(function(){
socket = io();
var jumlah_pengguna = 0;
$('#Tpesan').hover(function(){
	var jumlah = $('#Tjumlah').val();
	socket.emit('pencarian',{total : jumlah});
});
socket.on('hello',(data)=>{
	console.log(data);
	$('#Tjumlah').val(data.ayam);
	});
socket.on('pengguna_baru',(data)=>{
	jumlah_pengguna++;
	$('#pengguna_baru').text(' '+jumlah_pengguna);
	});
});
