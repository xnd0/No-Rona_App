// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');
var setupContainer = document.getElementById('setupJoke');
var jokeContainer = document.getElementById('dadJoke');
var badJokeContainer = document.getElementById('badJoke');

var chuckQuoteArray = [];
var chuckQuoteText = "";

var dadJokeArray = [];
var dadJokeText = "";

var badJokeArray = [];
var badJokeText = "";



// --- Functions Area --- //

function saveAdvice() {
	console.log('test save click')

	var storedChuck = JSON.parse(localStorage.getItem("chuckAdvice"));
	if (storedChuck !== null) {
		chuckQuoteArray = storedChuck;
	};
	chuckQuoteArray.push(chuckQuoteText);
	localStorage.setItem("chuckAdvice", JSON.stringify(chuckQuoteArray));
};


function saveDadJoke() {
	console.log('test dadJoke click')

	var storedDadJoke = JSON.parse(localStorage.getItem("dadJokeSave"));
			if (storedDadJoke !== null) {
				dadJokeArray = storedDadJoke;
			};
			dadJokeArray.push(dadJokeText);
	localStorage.setItem("dadJokeSave", JSON.stringify(dadJokeArray));
};



function saveBadJoke() {
	console.log('test badJoke click')

	var storedBadJoke = JSON.parse(localStorage.getItem("badJokeSave"));
	if (storedBadJoke !== null) {
		badJokeArray = storedBadJoke;
	};
	badJokeArray.push(badJokeText);
	localStorage.setItem("badJokeSave", JSON.stringify(badJokeArray));
};








// function displaySaved() {
// 	let adviceList = JSON.parse(localStorage.getItem("chuckAdvice"))

// 	for (let i = 0; i < adviceList.length; i++) {
//         const adviceEl = document.createElement("li");
//         adviceEl.textContent = adviceList[i];
//         savedQuotes.appendChild(adviceEl); 
//     }
// };

// displaySaved();



// --- Chuck Norris API URL --- //
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
	}
};

fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
	.then(response => response.json())
	.then(
		response => {
			console.log(response.value);
			console.log("test");
			// --display the quote

			var chuckQuote = document.createElement('h3');
			chuckQuote.textContent = response.value;
			chuckQuoteText = response.value;
			quoteContainer.append(chuckQuote);




		}).catch(err => console.error(err));




// --- Dad Jokes API URL --- //		
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options2)
	.then(response => response.json())
	.then(
		// response => {console.log(response.body);  // <--works?

		response => {
			console.log(response.body[0].punchline);

			// response => {console.log(response.body.type);	
			console.log("test dadJoke ^^");

			// --display the setup to the dadJoke
			var jokeSetup = document.createElement('h3');
			jokeSetup.textContent = response.body[0].setup;
			setupContainer.append(jokeSetup);

			// --display the joke punchline
			var dadJoke = document.createElement('h3');
			dadJoke.textContent = response.body[0].punchline;
			jokeContainer.append(dadJoke);

			dadJokeText =(response.body[0].setup + '--' + response.body[0].punchline);
		}).catch(err => console.error(err));




// --- BAD Jokes API URL --- //
const options3 = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Key': '435d50c541mshfc9db86f68d6624p177e00jsn2e5482e44a2b',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options3)
	.then(response => response.json())
	.then(
		response => {
			console.log(response[0].joke);
			console.log("test BAD joke ^^");
			// --display the BAD joke
			var badJoke = document.createElement('h3');
			badJoke.textContent = response[0].joke;
			badJokeText = response[0].joke;
			badJokeContainer.append(badJoke);
		}).catch(err => console.error(err));





// --- Event Listeners --- //

norrisButton.addEventListener("click", saveAdvice);
dadJokeButton.addEventListener("click", saveDadJoke);
badJokeButton.addEventListener("click", saveBadJoke);

