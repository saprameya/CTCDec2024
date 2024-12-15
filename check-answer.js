form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent default form submission and page refresh

	const formData = new FormData(form);

	// Access individual form values
	const input1 = formData.get('input1');
	const input2 = formData.get('input2');
	const input3 = formData.get('input3');

	const answer = [parseInt(input1), parseInt(input2), parseInt(input3)];

	console.log(typeof answer[0]);
	checkAnswer(answer);
});

function checkAnswer(answer) {
	checkWP(answer);
	if (winning) console.log('You won!');
	else console.log('You lost!');

	blackOut.classList.add('over');
}

let winning = true;
function checkWP(answer) {
	let count = 0;
	for (let index = 0; index < answer.length; index++) {
		if (answer.includes(wPArray[index])) {
			if (answer.indexOf(wPArray[index]) != index) winning = false;
			count++;
		}
	}
	if (count !== 1) winning = false;
	if (winning) checkTwoCorr(answer);
}

function checkTwoCorr(answer) {
	let count = 0;
	for (let index = 0; index < answer.length; index++) {
		if (answer.includes(twoCorrArr[index])) {
			if (answer.indexOf(twoCorrArr[index]) === index) winning = false;
			count++;
		}
	}
	if (count !== 2) winning = false;
	if (winning) checkOneCorr(answer);
}

function checkOneCorr(answer) {
	let count = 0;
	for (let index = 0; index < answer.length; index++) {
		if (answer.includes(oneCorrArr[index])) {
			if (answer.indexOf(oneCorrArr[index]) === index) winning = false;
			count++;
		}
	}
	if (count !== 1) winning = false;
	if (winning) checkNoCorr(answer);

	
}

function checkNoCorr(answer) {
	for (let index = 0; index < answer.length; index++) {
		if (answer.includes(noCorrArr[index])) winning = false;
	}
}
