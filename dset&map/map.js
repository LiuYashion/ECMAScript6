

/**
 * {设置map}
 */
var map_ = new Map();
var local = {province: 'HuBei'}
map_.set(local, 'homeTown')
console.log( map_ )	//Map { { province: 'HuBei' } => 'homeTown' }
console.log( map_.get(local) )	//homeTown


/**
 * {用数组设置map}
 */
var map2_ = new Map([
	['province', 'HuBei'],
	['city', 'YiChange']
])
console.log(map2_)	//Map { 'province' => 'HuBei', 'city' => 'YiChange' }


/**
 * {map根据内存地址判断是否为同一个值}
 */
var map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined

//对于不是简单类型的值（数字、字符串、布尔值），只有对同一个对象的引用，map才会被视为同一个值，上面两个['a']的内存地址不同，所以被视为不同的值



