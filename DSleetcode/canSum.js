// function canSum(target, num = []) {
// 	let sum = 0;
// 	for (let i = 0; i < num.length; i++) {
// 		sum = sum + num[i];
// 		if (sum === target) {
// 			console.log("true");
// 		} else {
// 			console.log("false");
// 		}
// 	}
// }
// canSum(300, [5, 7]);

// canSum recursion
function canSumRec(target, nums) {
	if (target === 0) return true;
	if (target < 0) return false;
	for (let num of nums) {
		const remainder = target - num;
		if (canSumRec(remainder, nums) === true) {
			return true;
		}
	}
	return false;
}
console.log(canSumRec(7, [7]));
