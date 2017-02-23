

var promise = new Promise(function(resolve,reject){
	resolve("finished")
})
var pro_1 = Promise.resolve(promise)
/**
 * {Promise { 'finished' }}
 * {promise包装之后还是promise}
 */

var thenable = {
  	then: function(resolve, reject) {
    	resolve(42);
  	}
};
var pro_2 = Promise.resolve(thenable);
pro_2.then(function(value) {
  	console.log(value);  
});
/**
 * {42}
 * {thenable的对象，包装之后会立即执行resolve}
 */

 



