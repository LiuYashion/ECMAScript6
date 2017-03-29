
/**
 * {set数据结构}
 */
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
console.log(s)	//Set { 2, 3, 5, 4 }

/**
 * {数组去重}
 */
var set = new Set([1, 2, 3, 4, 4]);
console.log( set )	//Set { 1, 2, 3, 4 }
console.log( [...set] )	//[ 1, 2, 3, 4 ]
//	[...new Set(array)]可用于数组去重


/**
 * {空值也会被纳入}
 */
var zero = new Set();
zero.add({})
console.log(zero)	//Set { {} }
zero.add({})
console.log(zero)	//Set { {}, {} }


/**
 * {set转数组}
 */
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);
console.log(array)
//	[ 1, 2, 3, 4, 5 ]


/**
 * {使用set做笛卡尔集}
 */
let a = new Set([1, 3, 4, 5])
let b = new Set([1, 2, 4, 8])

let union = new Set( [...a, ...b] );	//Set { 1, 3, 4, 5, 2, 8 }
let intersect = new Set( [...a].filter(item => b.has(item)) ) 	//Set { 1, 4 }
let difference = new Set( [...union].filter(item => !intersect.has(item)) ) 	//Set { 3, 5, 2, 8 }










