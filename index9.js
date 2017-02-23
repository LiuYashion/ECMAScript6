

var promise = new Promise(function(resolve,reject){
	resolve("finished")
})

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
 * {Promise { 'finished' }}
 */
var pro_1 = Promise.resolve(promise) 

var pro_2 = Promise.resolve(thenable) 

console.log(pro_2.then())