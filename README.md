

# [String](#string) [Array](#array)


# String

#### String.concat( string )
```javascript
var firstName = 'Jennifer'
var lastName = ' Lawrence'
var holeName = firstName.concat(lastName);
// "Jennifer Lawrence"
```

#### String.slice( from, end )
```javascript
var str = "hello world";
var result = str.slice(3,7);			
// lo w 参数中第一个作起始位置
// 对于负参,加上length
// [)
```

#### String.substring( from, end )
```javascript
var str = "hello world";
var result = str.slice(7,3);			
// lo w 参数中较小的作为起始位置
// 对于负参,变0
// [)
```

#### String.substr( from, end )
```javascript
var str = "hello world";
var result = str.slice(3,7);			
// lo worl 第二个参数作截取的长度  
// 仅对于第一个负参,加上length
// [)
```

#### String.indexOf( item, from )    
#### String.lastIndexOf( item, from )
```javascript
var str = "hello world";
var result1 = str.indexOf("o")        //  4
var result2 = str.lastIndexOf("o")    //  7
var result3 = str.indexOf("o",6)      //  7
var result4 = str.lastIndexOf("o",6)  //  4
```

#### String.trim()
```javascript
var str = "   hello world   ";
var result = str.trim()
// hello world
```

#### String.replace( str1, str2 )
```javascript
var str = "cat,bat,sat,fat";
var result = str.replace("at","one");			
//  cone,bat,sat,fat   
//  只替换第一个
```

#### String.split( string )
```javascript
var str = "red,blue,green,yellow";      
var res1 = str.split(",")		
// ["red", "blue", "green", "yellow"]      
var res2 = str.split(",", 2);		
// ["red", "blue"]  第二个参数用来限制数组大小		

```

#### String.join( string )
```javascript
var arr = ["A", "B", "C", "D"]
var result = arr.join("->")		
// A->B->C->D
```

#### for of 遍历字符串
```javascript
for (let codePoint of 'foo') {
  console.log(codePoint)
}
```

#### String.startsWith( str, from )
#### String.endsWith( str, from )
#### String.includes( str, from )
```javascript
var s = 'Hello world!';
s.startsWith('world', 6)  // true
s.endsWith('Hello', 5)    // true
s.includes('Hello', 6)    // false
```

#### String.charAt( index )
```javascript
var result = 'abc'.charAt(0) // b
```

#### String.padStart( length, string )
#### String.padEnd( length, string )
```javascript
var pad1 = "x".padStart(5, 'ab') 	// 'ababx'
var pad2 = "x".padStart(4, 'ab') 	// 'abax'
// 头部补全

var pad3 = "x".padEnd(5, 'ab') 	// 'xabab'
var pad4 = "x".padEnd(4, 'ab') 	// 'xaba'
// 尾部补全
```

---------------------------------------------------------------------

# Array

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    length: 4  
};
```

#### Array.from( obj )
```javascript
let arr1 = Array.from(arrayLike);
// ['a', 'b', 'c']

var arr2 = Array.from([1, 2, 3], (x)=>x*x)
// [1, 4, 9]
```

#### Array.of( index1, index2.. )
```javascript
var arr3 = Array.of(3, 11, 8) // [3,11,8]
var arr4 = Array.of(3)        // [3]
var arr5 = Array.of(3).length // 1
```

#### Array.copyWithin( begin, from, end )
```javascript
var arr6 = [33, 44, 55, 66, 77, 88].copyWithin(1, 4, 6)
// [33,77,88,66,77,88],会改变原数组 [)
// 1是起始位置,4-6为区间,半开半闭
```

#### Array.find( function )
```javascript
var arr7 = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
})
// 10
```

#### Array.findIndex( function )
```javascript
var arr8 = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 11;
})
// 3

var index = [NaN].findIndex(y => Object.is(NaN, y))
//0 可以找到NaN
```

#### Array.keys()
```javascript
for( let index of ["L", "X", "D", "Y"].keys()){
	console.log( index )
}
//0 1 2 3
```

#### Array.values()
```javascript
for( let value of ["L", "X", "D", "Y"].values()){
	console.log( value )
}
//L X D Y
```

#### Array.entries()
```javascript
for( let [index, value] of ["L", "X", "D", "Y"].entries()){
	console.log( index +" : "+value )
}
// 0:L 1:X...
```

#### Array.includes( value )
```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

#### Array.forEach( function )
```javascript
[,'z'].forEach((x,i) => console.log(x));
// z
```

#### Array.filter( boolean )
```javascript
var arr10 = [2,,9].filter(x => x>6)
// [9]
```

#### Array.every( boolean )
```javascript
var arr11 = [,5,'a'].every(x => x==='a')
// true
```

#### Array.some( boolean )
```javascript
var arr12 = [,'a'].some(x => x !== 'a')
// false
```

#### Array.map( function )
```javascript
var arr13 = ['pr','a'].map( x => x + '_' )
// ["pr_", "a_"]
```

#### Array.join( string )
```javascript
var arr14 = [,'a',undefined,'~'].join('#')
// "#a#~"
```

#### Array.toString()
```javascript
var arr15 = [,'a',undefined,'~'].toString()
// ,a,,~
```
---
