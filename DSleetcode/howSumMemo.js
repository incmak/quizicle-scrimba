function howSum(target, numbers, memo = {}) {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;
	for (let num of numbers) {
		const remainder = target - num;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[target] = [...remainderResult, num];
			return memo[target];
		}
	}
	memo[target] = null;
	return null;
}
console.log(howSum(280, [7, 14]));
