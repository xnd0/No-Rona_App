// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');
var dadJoke = document.getElementById('dadJoke');


// Chuck Norris API URL
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




// Dad Jokes API URL		
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options2)
	.then(response => response.json())
	.then(
		response => {console.log(response);
            console.log("test dadJoke");
            // --display the joke
            // var chuckQuote = document.createElement('h3');
            // chuckQuote.textContent = response.value;
            // quoteContainer.append(chuckQuote);
	}).catch(err => console.error(err));







  