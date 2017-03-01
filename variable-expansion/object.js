

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


var people 	= { name:'Liu' }
var age 	= { age:20 }
var locate 	= { locate:'ShenZhen' }

Object.assign(people, age, locate)	
//{ name: 'Liu', age: 20, locate: 'ShenZhen' }









