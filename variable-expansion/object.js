

var name = "LiuYashion"
var people = {name}
//	people { name:"LiuYashion" }


function f(name, locate){
	return {name, locate}
}
f("LiuYashion","Shenzhen")
// { name:"LiuYashion", locate:"ShenZhen" }



var birth = '2000/01/01';
var Person = {
  name: 'LiuYashion',
  birth,				//等同于birth: birth
  hello() { console.log('my name is :', this.name); }// 等同于hello: function ()...
};



let propKey = 'age';
let person = {
  [propKey]: 18,
  ['is' + 'Male']: true,
  ['say'+'something'](){ console.log( this.age ) }
};//{ age:18, isMale:true }

person.saysomething() // 18


//keyA和keyB都转成[object object],需要注意
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}


//对象比较
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true


//Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），
//也不拷贝不可枚举的属性（enumerable: false）。



var people 	= { name:'Liu' }
var age 	= { age:20 }
var locate 	= {
	domicile:'ShenZhen',
	home:{
		province:'Hubei',
		city:'YiChang'
	}
}



var people = Object.assign(people, age, locate)
Object.defineProperty(people, 'invisible', {
    enumerable: false,
    value: 'hello'
})

//遍历对象的属性

console.log( Object.keys(people) )
//[ 'name', 'age', 'domicile', 'home' ]

console.log( Object.getOwnPropertyNames(people) )
//[ 'name', 'age', 'domicile', 'home', 'invisible' ]







//Object.assign方法实行的是浅拷贝，而不是深拷贝。
//也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
//locate.home.city改变,people里的键值也改变
locate.home.city = 'XiaoXiTa'
console.log(people)

/*
	{
		name: 'Liu',
		age: 20,
		domicile: 'ShenZhen',
		home: {
			province: 'Hubei',
			city: 'YiChang'
		}
	}
 */
//这里是整合对象

//如果传入字符串,会先把字符串转成对象
var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }


var strObj1 = Object.assign("LiuYaXiong")
console.log( strObj1 )	//[String: 'LiuYaXiong']

var strObj2 = Object('abc')
console.log( strObj2 )


//Object.assign可以用来处理数组，但是会把数组视为对象。
var strObj3 = Object.assign([1, 2, 3], [4, 5])
console.log( strObj3 )
// [4, 5, 3]



//对象的可枚举属性
let objtest = { foo: 123 }
var dis = Object.getOwnPropertyDescriptor(objtest, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }




//Object.keys(),Object.values(),Object.entries(),同名方法类似数组
let {keys, values, entries} = Object;
let obj5 = { a: 1, b: 2, c: 3 };

for (let key of keys(obj5)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj5)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj5)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}


//对象的扩展运算符类似数组的

var student = {
	name:'Nick',
	age:18,
	hometown:{
		province:'GuangDong',
		city:'ShenZhen'
	}
}

const result = student?.name
console.log(result)
