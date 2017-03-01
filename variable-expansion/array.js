

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    '3': 'd',
    length: 4  
};

//	Array.from()
let arr1 = Array.from(arrayLike); // ['a', 'b', 'c']
// 类数组、可遍历 对象(arguments selector返回的对象)转成数组 

var arr2 = Array.from([1, 2, 3], (x)=>x*x)
// 等同于Array.from(arrayLike).map(x => x * x);

// Array.of()
var arr3 = Array.of(3, 11, 8) 	// [3,11,8]
var arr4 = Array.of(3) 			// [3]
var arr5 = Array.of(3).length 	// 1


// [].copyWithin() 1是截取段的起始位置,4-6是截取区间
var arr6 = [33, 44, 55, 66, 77, 88].copyWithin(1, 4, 6) //[33,77,88,66,77,88],会改变原数组


//
var arr7 = [1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10,没有就返回underfined


var arr8 = [1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 119;
}) // 2,没有就返回-1

var index = [NaN].findIndex(y => Object.is(NaN, y)) //0


//	遍历keys values entries
for( let index of ["L", "X", "D", "Y"].keys()){
	//console.log( index )
}

for( let value of ["L", "X", "D", "Y"].values()){
	//console.log( value )
}

for( let [index, value] of ["L", "X", "D", "Y"].entries()){
	//console.log( index +" : "+value )
}

//array.includes(),第二个参数表示起始位置
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true

// forEach方法
[,'z'].forEach((x,i) => console.log(x)); // z

// filter方法
var arr10 = ['a',,'b'].filter(x => true) // ['a','b']
console.log(arr10)

// every方法
var arr11 = [,'a'].every(x => x==='a') // true
console.log(arr11)

// some方法
var arr12 = [,'a'].some(x => x !== 'a') // false
console.log(arr12)

// map方法
var arr13 = [,'a'].map(x => 1) // [,1]
console.log(arr13)

// join方法
var arr14 = [,'a',undefined,null].join('#') // "#a##"
console.log(arr14)

// toString方法
var arr15 = [,'a',undefined,null].toString() // ",a,,"
console.log(arr15)


















































