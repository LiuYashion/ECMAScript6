


const machine1Promise = new Promise(
	(resolve,reject) => {
		setTimeout(() => {
			console.log( "mh1:"+new Date() );
			resolve("Success!")
		}, 1000)
	}
)

const machine2Promise = new Promise(
	(resolve,reject) => {
		setTimeout(() => {
			console.log( "mh2:"+new Date() );
			resolve("Success!")
		}, 3000)
	}
)

Promise.all([machine1Promise, machine2Promise]).then(
	() => {console.log( "all:"+new Date() );}
)




