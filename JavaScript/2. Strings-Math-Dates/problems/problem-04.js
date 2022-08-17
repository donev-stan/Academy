// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (num) => {
	const numString = num.toString();
	const numStringReversed = num.toString().split("").reverse().join("");

	return numString === numStringReversed;
};

const largestPalindromeProduct = () => {
	let palindromes = [];

	for (let i = 999; i > 100; i--) {
		for (let j = 999; j > 100; j--) {
			let mul = j * i;

			if (isPalindrome(mul)) {
				palindromes.push(mul);
			}
		}
	}

	console.log(`Largest palindrome is ${Math.max(...palindromes)}`);
};

largestPalindromeProduct();
