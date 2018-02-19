var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next) {
      res.render('soket', {
      title: 'Soket Semvak'
      });
      req.io.emit('connection', function(socket){
		console.log('Konek');
		socket.on('disconnect', function(){
		console.log('Diskonek');
	  });
});
})

module.exports = router;
