alert('Working Progress - Dont Judge Meh!👷‍♂️');

let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = emailElement.value;

	if (emailValue.includes('@')) {
		//all good
		alert('Thank you for your message!')
	} else {
		alert('Ooops! Email address is not valid, please try again')
	}
})

