const form = document.getElementById('puzzle-form');
let clue1 = document.getElementById('clue1');
let clue2 = document.getElementById('clue2');
let clue3 = document.getElementById('clue3');
let clue4 = document.getElementById('clue4');
let clueContainer = document.querySelector('.clue-container');
let clues = document.querySelectorAll('.clue');
const answers = document.querySelectorAll('.answer');
const buttons = document.querySelectorAll('.number');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
let activeInput = input1;

let clueCodes = [
	wPArray.join(''),
	twoCorrArr.join(''),
	oneCorrArr.join(''),
	noCorrArr.join(''),
];
let clueText = [
	'One number is correct and well placed',
	'Two numbers are correct but wrongly placed',
	'One number is correct but wrongly placed',
	'Nothing is correct',
];

let clueArr = [...clues];

const shuffleClues = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

clueArr = shuffleClues(clueArr);

for (let index = 0; index < 4; index++) {
	const tempCode = document.createElement('div');
	tempCode.classList.add('clue-code');
	tempCode.innerText = clueCodes[index];
	clueArr[index].appendChild(tempCode);

	const tempText = document.createElement('div');
	tempText.classList.add('clue-text');
	tempText.innerText = clueText[index];
	clueArr[index].appendChild(tempText);
}

answers.forEach((input) => {
	input.addEventListener('click', (e) => {
		e.preventDefault();

		activeInput = input;
	});
});

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		activeInput.value = button.value;
	});
});

// form.onsubmit() =  => event {
// 	event.preventDefault();

// 	input1.innerText = event.target.value;
// };
