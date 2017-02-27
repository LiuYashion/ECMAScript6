




var promise = new Promise(function(resolve, reject) {
  resolve('ok');
  setTimeout(function() { throw new Error('test') }, 0)
});
promise.then(function(value) {  });


process.on('unhandledRejection', function (err, p) {
	console.log("~~~~~~~~")
  	console.log(p)
});
