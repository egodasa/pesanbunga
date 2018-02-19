$(document).ready(function(){
	$('#hapus').on('click', function(){
		$('.pilih').toggle();
		$('#Bmulti_hapus').toggle();
		});
	$('#cek_nilai').click(function(){
		console.log($('.list_pengguna').val());
		});
});
