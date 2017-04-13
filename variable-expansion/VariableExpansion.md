
## Object

```javascript
var holeName = "LiuYashion"
var location = "Shenzhen"
```

#### { string }
```javascript
var people1 = { holeName }
// people { holeName:"LiuYashion" }

var people2 = { holeName, location }
// { holeName:"LiuYashion", location:"ShenZhen" }
```

#### 对象属性
```javascript
var people3 = {
  holeName:"LiuYashion",
  location,
  saysomething(){
    console.log('success');
  }
}

// {
//    holeName:"LiuYashion",
//    location:"ShenZhen"
//    saysomething:function(){
//      console.log('success')
//    }
// }
```

#### 对象属性名
```javascript
let propKey = 'age';
let person = {
  [propKey]: 18,
  ['is' + 'Male']: true
};

// { age:18, isMale:true }
// 仅限string类型,object类型会被直接转换成"[object object]"
```


#### 对象比较
```javascript
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

+0 === -0           //true
NaN === NaN         // false
Object.is(+0, -0)   // false
Object.is(NaN, NaN) // true
```

#### Object.assign( obj1, obj2, obj3 )
*Object.assign方法实行的是浅拷贝,而不是深拷贝.如果源对象某个属性的值是对象,那么目标对象拷贝得到的是这个对象的引用*
```javascript
var people 	= { name:'Liu' }
var locate 	= {
	domicile:'ShenZhen',
	home:{
		province:'Hubei',
		city:'YiChang'
	}
}
var people = Object.assign(people, locate)

// {
//   name: "Liu",
//   domicile: "ShenZhen",
//   home: {
// 		province:'Hubei',
// 		city:'YiChang'
// 	}
// }
```

#### Object.defineProperty( obj, prop, descriptor )
```javascript
Object.defineProperty(people, 'type', {
    enumerable: false,
    value: 'invisible'
})
//  log日志可看type:'invisible',但其不能被遍历出
```


#### Object.keys( object )
```javascript
Object.keys(people)
// ["name", "domicile", "home"]
```

#### Object.values( object )
```javascript
Object.values(people)
// ["name", "domicile", "home"]
```

#### Object.getOwnPropertyNames( object )
```javascript
Object.getOwnPropertyNames(people)
// ["name", "domicile", "home", "type"]
```


#### Object.assign( string )
```javascript
Object.assign("Liu")
Object("Liu")
// {0: "L", 1: "i", 2: "u"}
// 两个本质相同
```


#### Object.assign( array )
```javascript
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```


#### Object.getOwnPropertyDescriptor( array, prop )
```javascript
let objtest = { foo: 123 }
var dis = Object.getOwnPropertyDescriptor(objtest, 'foo')

//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

#### 解构赋值
```javascript
var Object = { keys: 'index8', values: 2, entries: 3 }
let {keys, values, entries} = Object;
console.log(keys)
// 'index8'
```

#### Object.assign( array )
```javascript
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```

---
