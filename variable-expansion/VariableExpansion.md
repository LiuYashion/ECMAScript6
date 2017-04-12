# String

#### concat
```javascript
var firstName = 'Jennifer'
var lastName = ' Lawrence'
var holeName = firstName.concat(lastName);

// "Jennifer Lawrence"
```

#### slice
```javascript
var str = "hello world";
var result = str.slice(3,7);			
// lo w 参数中第一个作起始位置
// 对于负参,加上length
// [)
```

#### substring
```javascript
var str = "hello world";
var result = str.slice(7,3);			
// lo w 参数中较小的作为起始位置
// 对于负参,变0
// [)
```

#### substr
```javascript
var str = "hello world";
var result = str.slice(3,7);			
// lo worl 第二个参数作截取的长度  
// 仅对于第一个负参,加上length
// [)
```


#### indexOf    lastIndexOf
```javascript
var str = "hello world";
var result1 = str.indexOf("o")        //  4
var result2 = str.lastIndexOf("o")    //  7
var result3 = str.indexOf("o",6)      //  7
var result4 = str.lastIndexOf("o",6)  //  4
```


#### trim
```javascript
var str = "   hello world   ";
var result = str.trim()
// hello world
```

#### replace
```javascript
var str = "cat,bat,sat,fat";
var result = str.replace("at","one");			
//  cone,bat,sat,fat   
//  只替换第一个
```

#### split
```javascript
var str = "red,blue,green,yellow";      
var res1 = str.split(",")		
// ["red", "blue", "green", "yellow"]      
var res2 = str.split(",", 2);		
// ["red", "blue"]  第二个参数用来限制数组大小		

```

#### join
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

#### startsWith endsWith includes
```javascript
var s = 'Hello world!';
s.startsWith('world', 6)  // true
s.endsWith('Hello', 5)    // true
s.includes('Hello', 6)    // false
```

#### at
```javascript
var result = 'abc'.charAt(0)
// b
```

#### padStart padEnd
```javascript
var pad1 = "x".padStart(5, 'ab') 	// 'ababx'
var pad2 = "x".padStart(4, 'ab') 	// 'abax'
// 头部补全

var pad3 = "x".padEnd(5, 'ab') 	// 'xabab'
var pad4 = "x".padEnd(4, 'ab') 	// 'xaba'
// 尾部补全
```
