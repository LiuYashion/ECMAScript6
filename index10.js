


var thenable = {
  	then: function(resolve, reject) {
    	reject(42);
  	}
};

var pro_2 = Promise.reject(thenable).catch(
	(e) => { console.log(e===thenable)}
)

//true





