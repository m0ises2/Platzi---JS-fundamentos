
/*function fibonnacci() {
	let a = 0
	let b = 1

	return {
		next: function() {
			let f = a
			a = b
			b = f + b
			return { value: f, done: false }
		}
	}
}*/

// Para decirle a JS que una función es un generador
// e le pone un asterisco (*) luego de la palabra function
function* fibonnacciGenerator() {
	let a = 0, b = 1

	while(true) {
		let f = a
		a = b
		b = f + b
		let reset = yield f
		if(reset) a = 0, b = 1
	}
}

const fibo = fibonnacciGenerator()
