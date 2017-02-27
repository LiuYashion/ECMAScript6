

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

var pro_3 = Promise.resolve("Hello")
pro_3.then(function(){
	console.log("finished")
})
/**
 * {没有then，或者不是对象。状态立即变成resolve}
 */

var pro_3 = Promise.resolve()
pro_3.then(function(){
	console.log("finished")
})
/**
 * {没有参数，返回一个promise对象。状态立即变成resolve}
 */