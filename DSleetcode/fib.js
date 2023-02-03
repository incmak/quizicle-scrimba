function fib(num) {
	let x = 0,
		y = 1,
		z = 0;
	for (let i = 0; i <= num; i++) {
		console.log(x);
		z = x + y;
		x = y;
		y = z;
	}
	console.log(num);
}
fib(10);

const fibRec = (n) => {
	if (n <= 2) {
		return 1;
	}
	return fibRec(n - 1) + fibRec(n - 2);
};
console.log(fibRec(4));
