// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, surpise) {
	const thankYous = [];
	for (let i = 0; i < names.length; i++) {
		const thankYou = `Thank you, ${names[i]}, for the wonderful ${surpise} gift!`;
		thankYous.push(thankYou);
	}
	return thankYous;
}

writeCards(names, "surprise");

const number = 10;
function countDown(number) {
	let i = 10;
	while (i >= 0) {
		console.log(i--);
	}
	return number;

}
countDown(number);