


var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
	var promise = new Promise(function(resolve,reject){
		if(id===7){
			reject(id)
		}else{
			resolve(id)
		}
	})
	promise.then(function(id){
		console.log("ID:"+id+" is finished")
	})
  	return promise
});

Promise.all(promises).then(function (posts) {
  	console.log("SUCCESS")
}).catch(function(reason){
  	console.log("FAILED")
});



