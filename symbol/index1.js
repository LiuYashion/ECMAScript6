
/**
 * {概述}
 */
var s1 = Symbol('I am a discripton. I am March')
var s2 = Symbol('I am a discripton. I am March')
console.log( s1 == s2 )	//false
console.log( s1.toString() == s2.toString() )	//true
console.log( Boolean(s1) )	//true


var book = {
	value:200,
	toString(){
		return 'Othello'
	}
}
console.log( Symbol(book) )	//Symbol(Othello),传入对象时默认调用tostring方法

/**
 * {属性名}
 */
var discription = Symbol('wirtten by L')
var task = {}
task[discription] = "It's done"
console.log(task)	//{};根据symbol设置的属性没有被枚举
console.log(task[discription])	//It's done


let s = Symbol();
let obj = {
  [s](arg){
  	return arg
  }
};
console.log(obj[s](123))	//123


/**
 * {定义常量}
 */
var log = {};
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log( log.levels.DEBUG, 'debug message' );
console.log( log.levels.INFO, 'info message' );


/**
 * {switch结构,能保证任何值都不会相等}
 */
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  	switch (color) {
	    case COLOR_RED:
	      return COLOR_GREEN;
	    case COLOR_GREEN:
	      return COLOR_RED;
	    default:
	      return  'Undefined color';
    }
}

console.log( getComplement(COLOR_RED) )



/**
 * {属性名的遍历}
 */
var collection = {};
var SymbolTag = Symbol('tag');

Object.defineProperty(collection, SymbolTag, {
	value:'SymbolTag'
})
Object.defineProperty(collection, 'EnumTrue', {
	value:'EnumTrue',
	enumerable: true
})
Object.defineProperty(collection, 'EnumFalse', {
	value:'EnumFalse',
	enumerable: false
})

console.log( collection )	//{ EnumTrue: 'EnumTrue' }
console.log( Object.getOwnPropertyNames(collection) )	//[ 'EnumTrue', 'EnumFalse' ]\n
console.log( Object.getOwnPropertySymbols(collection) )	//[ Symbol(tag) ]
console.log( Reflect.ownKeys(collection) )	//[ 'EnumTrue', 'EnumFalse', Symbol(tag) ]
//hi,注意这里取出来的始终是Symbol('tag'),并非SymbolTag.这里为非私有的内部方法
//SymbolTag并非collection私有,而且外部访问不到SymbolTag


/**
 * {返回同一个symbol值}
 */
var s1 = Symbol.for("September");
var s2 = Symbol.for("September")

console.log( Symbol.keyFor(s1) )	//September
console.log(s1 == s2)	//true

// Symbol.for()相当于会给








 
