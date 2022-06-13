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

//Covid Act Now API
//API key: 805adad0a8864a70a3239476c6971e3e
//URLs
/*
Current Data for All States, Counties, and Metro
https://api.covidactnow.org/v2/states.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/counties.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/cbsas.json?apiKey=YOUR_KEY_HERE

Current Data for Specific Locations
https://api.covidactnow.org/v2/state/{state}.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/county/{fips}.json?apiKey=YOUR_KEY_HERE
https://api.covidactnow.org/v2/cbsa/{cbsa_code}.json?apiKey=YOUR_KEY_HERE
*/

//retrieves county covid data from api 
fetch('https://api.covidactnow.org/v2/county/{fips}.json?apiKey=805adad0a8864a70a3239476c6971e3e')
		.then(response => response.json())
		.then(
			response => {console.log(response.metrics.weeklyNewCasesPer100k)
				var resultTest = document.getElementById('api-results')
				var listResult = document.createElement('li')
				var communityLevel = response.communityLevels.cdcCommunityLevel
				console.log(communityLevel)
				

			}
		)





  