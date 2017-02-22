
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function strToJson(str){ 
	var json = eval('(' + str + ')'); 
	return json; 
} 

var getJSON = function(url) {
  	var promise = new Promise(function(resolve, reject){
  		
	    var client = new XMLHttpRequest();
	    client.open("GET", url);
	    client.onreadystatechange = handler;
	    client.responseType = "json";
	    client.setRequestHeader("Accept", "application/json");
	    client.send();
	
	    function handler() {
	      	if (this.readyState !== 4) {
	        	return;
	      	}
	      	if (this.status === 200) {
	      		var res = strToJson(this.responseText)
	        	resolve( res.success );
	      	} else {
	        	reject(new Error(this.statusText));
	      	}
	    };
  	});

  	return promise;
};

getJSON("https://cnodejs.org/api/v1/topics?page=1&limit=1").then(function(result) {
  	console.log('the result: ' + result);
}, function(error) {
  	console.error('出错了', error);
});







