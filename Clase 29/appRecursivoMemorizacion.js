/*
	recurrencia con memorización
*/

let cont = 0;

function fibonacci(n, memoria = {}) {
	cont++

	if(memoria[n]) return memoria[n]
	if(n == 1) return 0
	if(n == 2) return 1	

	return memoria[n] = fibonacci(n-1, memoria) + fibonacci(n-2, memoria)
}

console.log(cont)

console.log(fibonacci(4)) // 2