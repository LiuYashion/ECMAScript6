
"use strict"

//	concat()
var str="hello ";      
var res=str.concat("world");

//	slice() substring() substr()
var str="hello world";         
console.log(str.slice(3,7));			//	lo w  
console.log(str.substring(3,7));	//	lo w      
console.log(str.substr(3,7));			//	lo worl    

//	indexOf() lastIndexOf()反向查询
var str="hello world";      
console.log(str.indexOf("o"));				//	4      
console.log(str.lastIndexOf("o"));		//	7      
console.log(str.indexOf("o",6));			//	7      
console.log(str.lastIndexOf("o",6));	//	4

//	trim()
var str="   hello world   ";      
console.log( str.trim() );	// hello world

//	replace()
var str="cat,bat,sat,fat";      
var res=str.replace("at","one");//第一个参数是字符串，所以只会替换第一个子字符串      
console.log(res);//cone,bat,sat,fat    

var res1=str.replace(/at/g,"one");//第一个参数是正则表达式，所以会替换所有的子字符串      
console.log(res1);//cone,bone,sone,fone

//	split()
var str="red,blue,green,yellow";      
console.log(str.split(","));			//	["red", "blue", "green", "yellow"]      
console.log(str.split(",",2));		//	["red", "blue"]  第二个参数用来限制数组大小      

//	join
var arr = ["A","B","C","D"]
console.log(arr.join("->"));

/////////

//	遍历字符串
for (let codePoint of 'foo') {
  console.log(codePoint)
}

//	startsWith() endsWith() includes() 后面跟的参数是开始索引
var s = 'Hello world!';
s.startsWith('world', 6)	// true
s.endsWith('Hello', 5) 		// true
s.includes('Hello', 6) 		// false

//	at()
console.log( 'abc'.charAt(0) )

//	repeat()
var item_4 = 'hello'.repeat(2) // "hellohello"
console.log( item_4 )

//	padStart()头部补全   padEnd()尾部补全
var pad1 = "x".padStart(5, 'ab') 	// 'ababx'
var pad2 = "x".padStart(4, 'ab') 	// 'abax'

var pad3 = "x".padEnd(5, 'ab') 	// 'xabab'
var pad4 = "x".padEnd(4, 'ab') 	// 'xaba'

//	字符串模板嵌入变量
var name = "Bob", time = "today";
var stringTemplate = `Hello ${name}, how are you ${time}?`
console.log( stringTemplate )




