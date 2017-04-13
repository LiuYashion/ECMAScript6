
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

+0 === -0 //true
NaN === NaN // false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

#### 对象属性名
```javascript
let propKey = 'age';
let person = {
  [propKey]: 18,
  ['is' + 'Male']: true
};

//{ age:18, isMale:true }

```

#### 对象属性名
```javascript
let propKey = 'age';
let person = {
  [propKey]: 18,
  ['is' + 'Male']: true
};

//{ age:18, isMale:true }

```
---
