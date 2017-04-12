
function fibonnacci() {
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
}

const fibo = {}

fibo[Symbol.iterator] = fibonnacci

let i = 0

for (let value of fibo) {
	
	++i
	
	console.log(value)

	// Condición de detención:
	if( i > 20) break

}