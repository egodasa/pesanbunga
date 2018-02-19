$(document).ready(function(){
	$('#ganti_foto').click(function(){
		$('#Tfoto').prop('disabled',function(i, v){
			return !v; });
		});
});
