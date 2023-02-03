function fibmemo(n, memo = {}) {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fibmemo(n - 1, memo) + fibmemo(n - 2, memo);
	console.log(memo);
	return memo[n];
}

console.log(fibmemo(10));
