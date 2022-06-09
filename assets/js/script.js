// ---------------------- //
// ----- Javascript ----- //
// ---------------------- //



var quoteContainer = document.getElementById('quoteContainer');



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








  