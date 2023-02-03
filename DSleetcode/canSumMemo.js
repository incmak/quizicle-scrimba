function canSumMemo(target, nums, memo = {}) {
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;
	for (let num in nums) {
		const remainder = target - num;
		if (canSumMemo(remainder, nums, memo) === true) {
			memo[target] = true;
			return true;
		}
	}
	memo[target] = false;
	return false;
}
console.log(canSumMemo(10, [2, 3, 5, 9]));
