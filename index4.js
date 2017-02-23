




/**
 * {会被捕获异常}
 */
var promise1 = new Promise(function(resolve, reject) {
  	resolve("test")
});

promise1.then(
	result => {console.log(result);throw new Error('test')}
).catch(function(error) {
  	console.log(error);
});

/**
 * {不会被捕获异常}
 */
var promise2 = new Promise(function(resolve, reject) {
  	resolve("test")
  	throw new Error('test')
});

promise2.then(
	result => {console.log(result)}
).catch(function(error) {
  	console.log(error);
});