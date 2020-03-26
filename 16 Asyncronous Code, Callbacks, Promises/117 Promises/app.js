// const willGetYouADog = new Promise((resolve,reject) => {
// 	const rand = Math.random();
// 	if(rand <0.5) {
// 		resolve()
// 	} else {
// 		reject()
// 	}
// })
// willGetYouADog.then(() => {
// 	console.log("Yay we got a dog")
// })
// willGetYouADog.catch(() => {
// 	console.log("No dog")
// })

const makeDogPromise = () => {
//const willGetYouADog = new Promise((resolve, reject) => {
	return new Promise((resolve,reject) => {	
		setTimeout(() => {
		const rand = Math.random();
		if (rand < 0.5) {
			resolve();
		} else {
			reject();
		}
	}, 5000);
});
}

makeDogPromise()
.then(() => {
	console.log('Yay we got a dog');
})
.catch(() => {
	console.log('No dog');
});

