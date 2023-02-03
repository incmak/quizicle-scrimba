function fact(num) {
	let fact = 0;
	for (let i = 1; i <= num; i++) {
		fact = i * i;
	}
	console.log(fact);
}
fact(10);
