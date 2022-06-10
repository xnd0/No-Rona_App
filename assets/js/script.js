// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');
var setupContainer = document.getElementById('setupJoke');
var jokeContainer = document.getElementById('dadJoke');


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
        response => {console.log(response.value);
            console.log("test");
            // --display the quote
            var chuckQuote = document.createElement('h3');
            chuckQuote.textContent = response.value;
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

		response => {console.log(response.body[0].punchline);

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
	}).catch(err => console.error(err));







  