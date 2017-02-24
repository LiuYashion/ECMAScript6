> 对于promise对象的介绍有全面的文档支持，十分适合初学者学习：
> [阮一峰的es6入门](http://es6.ruanyifeng.com/#docs/promise)

###Promise特点###
+ promise新建后会立即执行，resolve/reject执行哪一个是需要我们判断的
+ 回调函数一旦执行，表明状态要么Resolved，要么Rejected。该promise对象已经定型，再调用回调只会返回既定结果
+ 如果异步操作异常，状态就会变成rejected


###SetTimeout的第三个参数###
其中文档的第一个例子，此处的setTimeout()有3个参数，代码可知，timeout()返回一个promise对象，并且在ms之后执行setTimeout，setTimeout的第三个参数作为resolve的参数传入：
> ![](http://upload-images.jianshu.io/upload_images/1759843-5cd1d9c7ca98b064.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


###Resolve/Reject参数###
node中运行如下代码，这里需要注意：在promise对象中resolve()的参数，会被传递给回调函数，即图中的res.success和result
> ![](http://upload-images.jianshu.io/upload_images/1759843-54d1c7d22f6e0fc6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###异步操作嵌套###
如下图示，p1p2都为promise对象，但p1是p2的resolve参数，p2会等待p1有结果后执行
。现在对于p2两种结果的回调函数都存在，当不存在reject的回调时，会转入catch中，进行捕获
> ![](http://upload-images.jianshu.io/upload_images/1759843-d1094c5d702c1d81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###Promise的链式调用###
promise的then会返回一个新的promise对象，故其可以链式调用，下图可见，500ms的定时任务，resolved~被传入第一个then()，其后返回了resolved~prom1，在由第二个then()输出结果
> ![](http://upload-images.jianshu.io/upload_images/1759843-1dc6ac60357a13cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###Promise中的catch()###
+ 回调执行错误，状态变成reject，会执行catch。then()里抛出异常也会执行catch
+ 一旦状态改变完成，再抛出异常就不会被catch
+ Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
+ Promise对象抛出的错误不会传递到外层代码，只能用catch来捕捉
+ catch()中还能再抛出错误，但不会被自己捕获

> ![](http://upload-images.jianshu.io/upload_images/1759843-b16033cb90d15308.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###Catch的链式调用###
catch()返回的也是一个promise对象，故catch后面可以链式调用then()方法，不过catch只能捕获自己之前的异常，下图中第一个catch就没有捕获到异常
> ![](http://upload-images.jianshu.io/upload_images/1759843-09aec1354091524c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> ![](http://upload-images.jianshu.io/upload_images/1759843-bc2ad788554eddbe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


###Promise.all()###

+ promise.all()可接受一个数组为参数，每个元素为promise对象，类似于与运算，只有所有promise状态都为resolve时，Promise.all()才会执行resolve

> ![](http://upload-images.jianshu.io/upload_images/1759843-775dcb2b839cdda4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 如果有promise等待，Promise.all()亦会等待

> ![](http://upload-images.jianshu.io/upload_images/1759843-2110db14e3a6a826.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###Promise.race()###
与promise.all()相反，只要有一个promise状态改变，就会立即返回给promise.race()，<u>该promise的返回值会传递给回调函数</u>

> ![](http://upload-images.jianshu.io/upload_images/1759843-8104dd4e6fcb2472.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


###若干Promise.resolve()###
一般用promise.resolve()将现有对象转为Promise对象，几种情况如下

> ![]57B4.png](http://upload-images.jianshu.io/upload_images/1759843-66624864e20b0ac0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###若干Promise.reject()###
promise.reject()也会返回一个promise对象，原理同上。不同的部分：对thenable的对象调用reject()后不会执行其then()方法，图中返回的e即为thenable对象


> ![](http://upload-images.jianshu.io/upload_images/1759843-4e8b49aa88a7d10e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




~
> 最后附上demo链接：https://github.com/LiuYashion/ECMAScript6/
