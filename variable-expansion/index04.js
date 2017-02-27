
"use strict"

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











