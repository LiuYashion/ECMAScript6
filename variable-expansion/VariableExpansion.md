
## Array

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
