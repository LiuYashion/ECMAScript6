
//var f = () => console.log("LiuYashion")
//
//console.log("step: 1")
//Promise.resolve().then(f)
//console.log("step: 2")

/*
 * step:1
 * step:2
 * LiuYashion
 */

const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');











