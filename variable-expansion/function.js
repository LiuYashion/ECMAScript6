
//设置默认值,参数已经默认申明,内部不能再次let x；
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

var p = new Point();// { x: 0, y: 0 }


let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101


function fetch(url, { body = '', method = 'GET', headers = {} }) {
  console.log(method);
}

fetch('http://example.com', {}) //get


//解构赋值
// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 综述,{}={},右边的值会被函数传入值所替代

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

//传入undefine会被默认值覆盖,null不会
function foo2(x = 5, y = 6) {
  console.log(x, y);
}

foo2(undefined, null)
// 5 null




//	function().length
//	返回有默认值参数之前,未设默认值的参数个数

//	(function (a) {}).length // 1
//	(function (a = 5) {}).length // 0
//	(function (a, b, c = 5) {}).length // 2
//	(function (a = 0, b, c) {}).length // 0
//	(function (a, b = 1, c) {}).length // 1



//tips
let foo4 = 'outer';

function bar(func = x => foo4) {	//	这里的foo指向外层的foo(outer)
  let foo4 = 'inner';
  console.log(func()); // outer
}

bar();


var x3 = 1;
function foo3(x, y = function() { x3 = 2; }) {
  var x3 = 3;
  y();
  console.log(x);
}


foo3() 	// 3
x 		// 1


//	rest参数(...values),代替arguments对象
//	function().length不会算入rest参数
//	讲一串都好分隔的变量,转换成数组
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10


//拓展运算符,rest逆运算,把数组展开成都好分隔的变量
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5


//合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]

//	拆分数组
const [first, ...rest] = [1, 2, 3, 4, 5];
var item1 = first // 1
var item2 = rest  // [2, 3, 4, 5]

//实现了Iterator接口的对象
//var nodeList = document.querySelectorAll('div');
//var array = [...nodeList];


//没有部署Iterator接口的类似数组的对象
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// TypeError: Cannot spread non-iterable object.
//	let arr = [...arrayLike];


let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);



//箭头函数,不赘述
//箭头函数有几个使用注意点。
//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
//（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。





//	尾递归优化




































