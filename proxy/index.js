
/**
 * {通过设置proxy，在preson访问之前设置一个屏障，得先通过这层屏障，才能访问属性}
 */
var person = {
	name: 'September',
	age: '8808'
}
var proxy = new Proxy(person,{
	get: function(target, property){
		if(property in target){
			console.log('get: '+property)
			return target[property]
		}else{
			return 'unknown'
		}
	}
})
proxy.name	//get: name



/**
 * {get方法能够被继承}
 */
var proxy2_ = Object.create(proxy)
proxy2_.age	//get: age



/**
 * {reduce}
 */





















