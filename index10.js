

Promise.prototype.done = function (resolve, reject) {
	this.then(resolve, reject)
    .catch(function (reason){
      	setTimeout(() => { throw reason }, 0);
    });
};

Promise.prototype.finally = function (callback) {
  	var P = this.constructor;
  	return this.then(
    	value  => P.resolve(callback()).then(() => value),
    	reason => P.resolve(callback()).then(() => { throw reason })
  	);
};

var promise1 = new Promise((resolve,reject) => resolve("finished"))
var promise2 = new Promise((resolve,reject) => resolve("finished"))
var promise3 = new Promise((resolve,reject) => reject("finished"))

promise3.then(
	() => {console.log("then-1")},
).then(
	() => {console.log("then-2")}
).then(
	() => {console.log("then-3")}
)

promise2.then(function(e){
	throw new Error("ERROR!")
}).finally(function(){
	console.log("xxx")
})


promise1.then(function(e){
	throw new Error("ERROR!")
}).done()



