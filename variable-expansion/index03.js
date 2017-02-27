
/*	结构赋值	*/
"use strict"

let { foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo)

var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // nul

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}