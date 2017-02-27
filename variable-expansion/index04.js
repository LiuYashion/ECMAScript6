
"use strict"

//遍历字符串
for (let codePoint of 'foo') {
  console.log(codePoint)
}

var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

//at()
console.log( 'abc'.charAt(0) )