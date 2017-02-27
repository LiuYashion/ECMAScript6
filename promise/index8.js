

const promise1 = new Promise(
	(resolve,reject) => {
		setTimeout(()=>{
			console.log("pro1: "+new Date());
			resolve()
		},1000)
	}
).then(
	()=>{return "pro1"}
)

const promise2 = new Promise(
	(resolve,reject) => {
		setTimeout(()=>{
			console.log("pro2: "+new Date());
			resolve()
		},3000)
	}
).then(
	()=>{return "pro2"}
)

Promise.race([promise1,promise2]).then(
	(e)=>{
		console.log(e)
		console.log("race: "+new Date());
	}
)

