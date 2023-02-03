function fibtry(num, memo = {}) {
	if (num in memo) return memo[num];
	if (num <= 2) {
		return 1;
	}
	memo[num] = fibtry(num - 1, memo) + fibtry(num - 2, memo);
	return memo[num];
}
console.log(fibtry(50));
