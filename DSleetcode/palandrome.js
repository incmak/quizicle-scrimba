let number = 121;
let orginal = number;
let remainder,
	reverse = 0;
while (number > 0) {
	remainder = number % 10;
	reverse = reverse * 10 + remainder;
	number = parseInt(number / 10);
}
console.log(reverse);

if (orginal === reverse) {
	return true;
} else {
	return false;
}
