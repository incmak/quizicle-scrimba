function birthdayCakeCandles(candles) {
	// Write your code here
	let max = candles[0];
	let count = 0;
	for (let i = 0; i < candles.length; i++) {
		if (candles[i] >= max) {
			return max = candles[i];
			// count++;
		}
	}

	console.log(max);
}

birthdayCakeCandles([2, 2, 3, 4, 5, 5]);
