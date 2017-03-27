const birthday = document.getElementById('birthday');
const submitButton = document.getElementById('submit');
const stopButton = document.getElementById('stop');
const ageText = document.getElementById('age');

function calculateAge () {
	let bornDay = new Date(birthday.value);
	let age = ((Date.now() - bornDay) / 1000 / 60 / 60 / 24 / 365).toFixed(8);
	ageText.innerText = `You are ${age} years old and you're not getting any younger.`;
	var repeat = requestAnimationFrame(calculateAge);
	stopButton.addEventListener('click', () => cancelAnimationFrame(repeat));
}

submitButton.addEventListener('click', calculateAge);