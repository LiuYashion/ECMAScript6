



var prom1 = new Promise(function(resolve, reject){
	return setTimeout(resolve("resolved~"),500);
})

prom1.then(
	result => result + "prom1"
).then(
	result => console.log(result)
)
