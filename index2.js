




var p1 = new Promise(function (resolve, reject) {
  	setTimeout(() => reject("failed"), 1000)
})

var p2 = new Promise(function (resolve, reject) {
  	setTimeout(() => resolve(p1), 500)
})

p2
  	.then(
  		result => console.log("resolve: "+result),
  		result => console.log("reject: " +result)
  	)
  	.catch(
  		error => console.log("error: "+error)
  	)
  	


