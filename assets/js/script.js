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



// --- Chuck Norris Fetch API URL --- //
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



// --- Dad Jokes Fetch API URL --- //		
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



// --- BAD Jokes Fetch API URL --- //
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
	.then(		response => {
		console.log(response[0].joke);
		console.log("test BAD joke ^^");
		// --display the BAD joke
		var badJoke = document.createElement('h3');
		badJoke.textContent = response[0].joke;
		badJokeText = response[0].joke;
		badJokeContainer.append(badJoke);
	}).catch(err => console.error(err));






//retrieves county covid data from api 
function goFetch() {
	
	var select = document.getElementById('county')
	var value = select.options[select.selectedIndex].value
	var apiURL = 'https://api.covidactnow.org/v2/county/' + value + '.json?apiKey=805adad0a8864a70a3239476c6971e3e'
	console.log(value)
	console.log(apiURL)
	fetch(apiURL)
			.then(response => response.json())
			.then(
				response => {console.log(response.metrics.weeklyNewCasesPer100k)
					var levelPreface = document.getElementById('preface')
					var levelPostface = document.getElementById('postface')
					var communityLevel  
					var levelText = document.getElementById('level')
					var levelChanger = function() {
						if (response.communityLevels.cdcCommunityLevel === 0) {
							communityLevel = 'Low'
						} else if (response.communityLevels.cdcCommunityLevel === 1) {
							communityLevel = 'Medium'
						} else if (response.communityLevels.cdcCommunityLevel === 2) {
							communityLevel = 'High!'
						} else {
							communityLevel = 'Unavailable, Sorry!'
						}
						levelText.innerHTML = communityLevel
					}

					levelPreface.innerHTML = 'Community Level risk in this county is ';
					levelChanger();
					levelPostface.innerHTML = '...better check this out to help deal: <a href="./norris.html">Click Here</a>' 


					levelPreface.innerHTML = 'CDC Community Level is: '
					levelChanger()

					console.log(communityLevel)
					document.getElementById('level-box').hidden = false
                     
      }
			)
		}
					

console.log(document)
document.getElementById('searchBtn').addEventListener('click', goFetch)
// --- Event Listeners --- //

norrisButton.addEventListener("click", saveAdvice);
dadJokeButton.addEventListener("click", saveDadJoke);
badJokeButton.addEventListener("click", saveBadJoke);
