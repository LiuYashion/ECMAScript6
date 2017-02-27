//let
"use strict"

{
	let getLet = "let's result"
	var getVar = "var's result"
	
	console.log( getLet )
}
console.log( getVar )

/**
 * {不准重复声明}
 * {不会变量提升}
 * {}
 */

var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined

var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5

function f() { 
	console.log('I am outside!'); 
}
(function () {
  if (false) {
    function f(){ 
    	console.log('I am inside!'); 
    }
  }
  f();
}());
