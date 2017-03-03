

var num1 = Number('0b111')	// 7,严格模式下转换进制
var num2 = Number('0o10')	// 8

//
Number.isFinite(15); // true

//
Number.isNaN(NaN) // true

//转换成整数
Number.parseInt('12.34') // 12

//转换成小数
Number.parseFloat('123.45#') // 123.45 

//判断是否为整数
Number.isInteger(3.0) //true

//误差比它小即可认为计算正确
Number.EPSILON

//判断整数是否在-2^53到2^53之间
Number.isSafeInteger(9007199254740992) //false

//去除小数位
Math.trunc()

//判断正负,正负0,返回:	+1;-1;+0;-0;NaN
Math.sign() 

//负为true,正为false,返回:	true;false
Math.signbit(-0)//true

//用于计算一个数的立方根。
Math.cbrt(8)

//无法用64个二进制位精确表示的小数,返回最接近这个小数的单精度浮点数
Math.fround(1.333) // 1.3370000123977661

//返回所有参数算数平方根
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755


//对数方法
//三角函数方法