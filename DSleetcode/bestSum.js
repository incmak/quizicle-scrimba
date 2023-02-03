function bestSum(target, numbers) {
	if (target === 0) return [];
	if (target < 0) return null;

	let shortestCombination = null;
	for (let num of numbers) {
		const remainder = target - num;
		const remainderCombination = bestSum(remainder, numbers);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}
	return shortestCombination;
}
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
