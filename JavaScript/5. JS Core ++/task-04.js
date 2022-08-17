const solve = (trash) => {
	const regex = /[a-z^s!^s.]/gm;
	return trash.match(regex).join("");
};

const msg = solve("KU%il@ovey%ou()rsi|sTGtBer!");
console.log(msg);
